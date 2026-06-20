'use client';

import React, { useEffect, useState } from 'react';
import { publicApi } from '@/apis/api';
import ImageUploader from '@/components/common/ImageUploader';

export default function AdminClientsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [website, setWebsite] = useState('');

    const load = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await publicApi.clients();
            setItems(data.clients || []);
        } catch (e) {
            setError(e.message || 'Failed to load');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const create = async () => {
        try {
            await publicApi.createClient({ name, logoUrl, website });
            setName(''); setLogoUrl(''); setWebsite('');
            await load();
            alert('Created');
        } catch (e) { alert(e.message || 'Create failed'); }
    };

    const update = async (id, body) => {
        try { await publicApi.updateClient(id, body); await load(); alert('Updated'); } catch (e) { alert(e.message || 'Update failed'); }
    };
    const remove = async (id) => {
        if (!confirm('Delete this client?')) return;
        try { await publicApi.deleteClient(id); await load(); alert('Deleted'); } catch (e) { alert(e.message || 'Delete failed'); }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Clients</h1>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div className="text-red-600">{error}</div>}

            <section className="mb-6 bg-gray-50 p-4 rounded-md">
                <h2 className="font-medium mb-2">Add new client</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                    <div className="md:col-span-1">
                        <label className="block text-xs text-gray-600">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border p-2 rounded mt-1" />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-600">Website</label>
                        <input value={website} onChange={e => setWebsite(e.target.value)} placeholder="Website" className="w-full border p-2 rounded mt-1" />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-600">Logo</label>
                        <div className="flex items-center gap-2 mt-1">
                            {logoUrl ? (
                                <img src={logoUrl} alt="logo" className="w-16 h-16 object-cover rounded" />
                            ) : (
                                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400">No logo</div>
                            )}
                            <ImageUploader scope="client" buttonLabel="Upload" onUploaded={(url) => setLogoUrl(url)} />
                        </div>
                    </div>
                </div>

                <div className="mt-3">
                    <button onClick={create} className="px-4 py-2 bg-green-600 text-white rounded">Add Client</button>
                </div>
            </section>

            {!loading && !error && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((c) => (
                        <div key={c._id} className="border rounded-lg p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3">
                                <img src={c.logoUrl || 'https://via.placeholder.com/60'} alt="logo" className="w-14 h-14 object-cover rounded" />
                                <div className="flex-1">
                                    <div className="font-semibold text-lg">{c.name}</div>
                                    <a href={c.website} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:underline">{c.website}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button onClick={() => {
                                    const newName = prompt('Edit name', c.name);
                                    if (newName !== null) update(c._id, { name: newName });
                                }} className="px-3 py-1 border rounded bg-white">Edit</button>
                                <button onClick={() => remove(c._id)} className="px-3 py-1 border rounded bg-white text-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


