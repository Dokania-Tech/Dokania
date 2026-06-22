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

    const filtered = items.filter(
        (m) =>
            !query ||
            `${m.name} ${m.email} ${m.phone} ${m.position} ${m.subject}`
                .toLowerCase()
                .includes(query.toLowerCase())
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Contact Messages</h1>
                <input
                    placeholder="Search by name, email, phone or subject"
                    className="border p-2 rounded text-sm w-72"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {loading && <div>Loading...</div>}
            {error && <div className="text-red-600">{error}</div>}

            {!loading && !error && (
                <div className="overflow-auto border rounded">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 whitespace-nowrap">Name</th>
                                <th className="p-2 whitespace-nowrap">Email</th>
                                <th className="p-2 whitespace-nowrap">Phone</th>
                                <th className="p-2 whitespace-nowrap">Position</th>
                                <th className="p-2 whitespace-nowrap">Subject</th>
                                <th className="p-2 whitespace-nowrap">Source</th>
                                <th className="p-2 whitespace-nowrap">Message</th>
                                <th className="p-2 whitespace-nowrap">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((m) => (
                                <tr
                                    key={m._id}
                                    className="border-t hover:bg-gray-50 cursor-pointer"
                                    onClick={() => setSelected(m)}
                                >
                                    <td className="p-2 whitespace-nowrap">{m.name}</td>
                                    <td className="p-2 whitespace-nowrap">{m.email}</td>
                                    <td className="p-2 whitespace-nowrap">{m.phone || '—'}</td>
                                    <td className="p-2 whitespace-nowrap">{m.position || '—'}</td>
                                    <td className="p-2 whitespace-nowrap max-w-[160px] truncate" title={m.subject}>{m.subject}</td>
                                    <td className="p-2 whitespace-nowrap">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${m.source === 'quote' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                            {m.source || 'contact'}
                                        </span>
                                    </td>
                                    <td className="p-2 max-w-xs truncate text-gray-600" title={m.message}>{m.message}</td>
                                    <td className="p-2 whitespace-nowrap text-gray-500">{new Date(m.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="p-4 text-center text-gray-400">No messages found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Detail Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold">{selected.subject || 'Message'}</h3>
                            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">&times;</button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 mb-4">
                            <div><span className="font-medium text-gray-500">Name:</span> {selected.name}</div>
                            <div><span className="font-medium text-gray-500">Email:</span> {selected.email}</div>
                            <div><span className="font-medium text-gray-500">Phone:</span> {selected.phone || '—'}</div>
                            <div><span className="font-medium text-gray-500">Position:</span> {selected.position || '—'}</div>
                            <div>
                                <span className="font-medium text-gray-500">Source:</span>{' '}
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${selected.source === 'quote' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                                    {selected.source || 'contact'}
                                </span>
                            </div>
                            <div><span className="font-medium text-gray-500">Date:</span> {new Date(selected.createdAt).toLocaleString()}</div>
                        </div>
                        <div className="border-t pt-4">
                            <p className="text-sm font-medium text-gray-500 mb-1">Message:</p>
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">{selected.message}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
