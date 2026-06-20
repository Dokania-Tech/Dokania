import React from 'react';
import ProductDetail from '@/components/products/ProductDetail';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params }) {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';
    const res = await fetch(`${base}/products/${params.slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return notFound();
    const data = await res.json();
    const p = data.product;
    if (!p) return notFound();
    const product = {
        id: p._id,
        slug: p.slug,
        name: p.name,
        category: p.category,
        price: p.priceLabel || 'Contact for Quote',
        description: p.description,
        longDescription: p.longDescription || p.description,
        features: p.features || [],
        specifications: Object.fromEntries(Object.entries(p.specifications || {})),
        images: p.images?.length ? p.images : ['/images/placeholder.html'],
        applications: p.applications || [],
        inStock: p.inStock,
    };
    return <ProductDetail product={product} />;
}
