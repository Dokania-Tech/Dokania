'use client';

import React, { useEffect, useState } from 'react';
import { productApi } from '@/apis/api';
import { useParams, useRouter } from 'next/navigation';
import ImageUploader from '@/components/common/ImageUploader';

export default function EditProductPage() {
    const params = useParams();
    const router = useRouter();
    const [form, setForm] = useState({ name: '', slug: '', category: '', priceLabel: 'Contact for Quote', description: '', longDescription: '', images: '', inStock: true });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                // Load full list and find by id (simpler than creating a dedicated endpoint)
                const data = await productApi.list({ limit: 1000 });
                const p = data.products.find(x => x._id === params.id);
                if (!p) throw new Error('Product not found');
                setForm({
                    name: p.name,
                    slug: p.slug,
                    category: p.category,
                    priceLabel: p.priceLabel || 'Contact for Quote',
                    description: p.description || '',
                    longDescription: p.longDescription || '',
                    images: (p.images || []).join(', '),
                    inStock: !!p.inStock,
                });
                setImageUrls(p.images || []);
            } catch (e) {
                setError(e.message || 'Failed to load');
            } finally {
                setLoading(false);
            }
        })();
    }, [params.id]);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError('');
        try {
            const payload = {
                ...form,
                images: Array.from(new Set([
                    ...imageUrls,
                    ...(form.images ? form.images.split(',').map(s => s.trim()) : [])
                ])),
            };
            await productApi.update(params.id, payload);
            alert('Updated');
            router.push('/admin/products');
        } catch (e) {
            setError(e.message || 'Failed to update');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
            <form onSubmit={onSubmit} className="space-y-4 max-w-3xl">
                {error && <div className="text-red-600">{error}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label className="text-xs text-gray-600">Name</label>
                        <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded mt-1" required />
                    </div>
                    <div>
                        <label className="text-xs text-gray-600">Slug</label>
                        <input name="slug" value={form.slug} onChange={onChange} placeholder="Slug" className="w-full border p-2 rounded mt-1" required />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label className="text-xs text-gray-600">Category</label>
                        <input name="category" value={form.category} onChange={onChange} placeholder="Category" className="w-full border p-2 rounded mt-1" required />
                    </div>
                    <div>
                        <label className="text-xs text-gray-600">Price Label</label>
                        <input name="priceLabel" value={form.priceLabel} onChange={onChange} placeholder="Price Label" className="w-full border p-2 rounded mt-1" />
                    </div>
                </div>

                <div>
                    <label className="text-xs text-gray-600">Short description</label>
                    <textarea name="description" value={form.description} onChange={onChange} placeholder="Short description" className="w-full border p-2 rounded mt-1" required />
                </div>

                <div>
                    <label className="text-xs text-gray-600">Long description</label>
                    <textarea name="longDescription" value={form.longDescription} onChange={onChange} placeholder="Long description" className="w-full border p-2 rounded mt-1" />
                </div>

                <div>
                    <label className="text-xs text-gray-600">Stock status</label>
                    <select name="inStock" value={form.inStock ? 'true' : 'false'} onChange={(e) => setForm({ ...form, inStock: e.target.value === 'true' })} className="w-full border p-2 rounded mt-1">
                        <option value="true">In Stock</option>
                        <option value="false">Out of Stock</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <ImageUploader scope="product" onUploaded={(url) => setImageUrls(prev => [...prev, url])} />
                    {imageUrls.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {imageUrls.map((u, i) => (
                                <div key={i} className="relative">
                                    <img src={u} alt="uploaded" className="w-16 h-16 object-cover rounded" />
                                    <button type="button" onClick={() => setImageUrls(prev => prev.filter((x, idx) => idx !== i))} className="absolute -top-2 -right-2 bg-white rounded-full p-1 text-red-600 border">x</button>
                                </div>
                            ))}
                        </div>
                    )}
                    <input name="images" value={form.images} onChange={onChange} placeholder="Additional image URLs (comma separated)" className="w-full border p-2 rounded" />
                </div>

                <div className="flex items-center gap-3">
                    <button disabled={saving} className="px-4 py-2 bg-green-600 text-white rounded">{saving ? 'Saving...' : 'Save'}</button>
                    <button type="button" onClick={() => window.confirm('Discard changes and go back?') && window.history.back()} className="px-4 py-2 border rounded">Cancel</button>
                </div>
            </form>
        </div>
    );
}


