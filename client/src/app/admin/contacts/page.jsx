'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/apis/api';

export default function AdminContactsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setError('');
            try {
                const res = await api.get('/contact');
                setItems(res.data.messages || []);
            } catch (e) {
                setError(e.message || 'Failed to load messages');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Contact Messages</h1>
                <div>
                    <input placeholder="Search by name or email" className="border p-2 rounded text-sm" onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>

            {loading && <div>Loading...</div>}
            {error && <div className="text-red-600">{error}</div>}

            {!loading && !error && (
                <div className="overflow-auto border rounded">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Subject</th>
                                <th className="p-2">Message</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.filter(m => !query || `${m.name} ${m.email}`.toLowerCase().includes(query.toLowerCase())).map((m) => (
                                <tr key={m._id} className="border-t hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(m)}>
                                    <td className="p-2">{m.name}</td>
                                    <td className="p-2">{m.email}</td>
                                    <td className="p-2">{m.subject}</td>
                                    <td className="p-2 max-w-xl truncate" title={m.message}>{m.message}</td>
                                    <td className="p-2">{new Date(m.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selected && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-4 max-w-2xl w-full">
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold">{selected.subject || 'Message'}</h3>
                            <button onClick={() => setSelected(null)} className="text-gray-500">Close</button>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                            <div><strong>From:</strong> {selected.name} &lt;{selected.email}&gt;</div>
                            <div className="mt-3 whitespace-pre-wrap">{selected.message}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


