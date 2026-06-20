'use client';

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { publicApi } from '@/apis/api';

// Small presentational card for a client logo; memoized to avoid re-renders.
const ClientCard = React.memo(function ClientCard({ client }) {
    return (
        <a
            href={client.website || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1 p-10 border border-gray-100"
            aria-label={`Visit ${client.name} website`}
        >
            <div className="flex flex-col items-center text-center">
                <div className="w-40 h-20 mb-3 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src={client.logoUrl} alt={client.name} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 truncate w-36">{client.name}</h3>
                {client.website && (
                    <p className="text-xs text-gray-500 mt-1 truncate w-44">{(() => { try { return new URL(client.website).host } catch (e) { return client.website } })()}</p>
                )}
            </div>
        </a>
    );
});

const ClientLogos = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    useEffect(() => {
        const t = setTimeout(() => setDebouncedQuery(query.trim()), 250);
        return () => clearTimeout(t);
    }, [query]);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        publicApi.clients()
            .then((data) => {
                if (!mounted) return;
                const list = Array.isArray(data?.clients) ? data.clients : [];
                const mapped = list.map((c) => ({ id: c._id, name: c.name, logoUrl: c.logoUrl || '/images/logo.jpg', website: c.website || '' }));
                setClients(mapped);
            })
            .catch((e) => {
                console.error('clients load error', e);
                setError(e?.message || 'Failed to load clients');
            })
            .finally(() => mounted && setLoading(false));
        return () => { mounted = false; };
    }, []);

    const filtered = useMemo(() => {
        if (!debouncedQuery) return clients;
        const q = debouncedQuery.toLowerCase();
        return clients.filter((c) => (c.name || '').toLowerCase().includes(q));
    }, [clients, debouncedQuery]);

    const onChange = useCallback((e) => setQuery(e.target.value), []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input aria-label="Search clients" placeholder="Search clients by name" value={query} onChange={onChange} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white text-sm" />
                    </div>
                    <div className="text-sm text-gray-600">{filtered.length} / {clients.length}</div>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="animate-pulse p-4 bg-white rounded-lg border border-gray-100 h-36" />
                    ))}
                </div>
            ) : error ? (
                <div className="text-center text-red-600 py-8">{error}</div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filtered.map((client) => (
                        <ClientCard key={client.id} client={client} />
                    ))}
                </div>
            )}

            {!loading && !filtered.length && (
                <div className="text-center py-12 text-gray-600">No clients found. Try a different search.</div>
            )}
        </div>
    );
};
    
export default ClientLogos;
