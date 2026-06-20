'use client';

import React, { useRef, useState } from 'react';
import { uploadApi } from '@/apis/api';

export default function ImageUploader({ scope = 'product', onUploaded, buttonLabel = 'Upload Image' }) {
    const inputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleSelect = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        setError('');
        try {
            const apiCall = scope === 'client' ? uploadApi.clientImage : uploadApi.productImage;
            const res = await apiCall(file);
            onUploaded?.(res.url, res);
        } catch (err) {
            setError(err.message || 'Upload failed');
        } finally {
            setUploading(false);
            if (inputRef.current) inputRef.current.value = '';
        }
    };

    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <input ref={inputRef} type="file" accept="image/png,image/jpeg,image/webp" onChange={handleSelect} className="hidden" />
            <button type="button" onClick={() => inputRef.current?.click()} disabled={uploading} className="px-3 py-2 border rounded bg-white">
                {uploading ? 'Uploading…' : buttonLabel}
            </button>
            {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
    );
}


