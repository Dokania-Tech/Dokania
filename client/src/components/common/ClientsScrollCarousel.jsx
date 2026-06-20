'use client';

import React, { useEffect, useRef, useState } from 'react';
import { publicApi } from '@/apis/api';

/**
 * ClientsScrollCarousel
 *
 * A reusable, horizontally auto-scrolling carousel of client logos.
 * Fetches all clients from the API and displays them in an infinite marquee.
 *
 * Props:
 *   speed        {number}  – pixel-scroll speed per animation-frame (default 0.6)
 *   cardWidth    {number}  – width of each card in px (default 180)
 *   cardHeight   {number}  – height of each card in px (default 100)
 *   gap          {number}  – gap between cards in px (default 24)
 *   showName     {boolean} – whether to show client name below the logo (default true)
 *   className    {string}  – extra classes on the outer wrapper
 */
const ClientsScrollCarousel = ({
    speed = 0.6,
    cardWidth = 180,
    cardHeight = 100,
    gap = 24,
    showName = true,
    className = '',
}) => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const trackRef = useRef(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);
    const rafRef = useRef(null);

    // ── Fetch clients ──────────────────────────────────────────────────────────
    useEffect(() => {
        let mounted = true;
        setLoading(true);
        publicApi
            .clients()
            .then((data) => {
                if (!mounted) return;
                const list = Array.isArray(data?.clients) ? data.clients : [];
                const mapped = list.map((c) => ({
                    id: c._id,
                    name: c.name || 'Client',
                    logoUrl: c.logoUrl || '/images/logo.jpg',
                    website: c.website || '#',
                }));
                setClients(mapped);
            })
            .catch((e) => {
                console.error('ClientsScrollCarousel load error', e);
                setError(e?.message || 'Failed to load clients');
            })
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, []);

    // ── Infinite scroll animation ──────────────────────────────────────────────
    useEffect(() => {
        if (!clients.length) return;
        const track = trackRef.current;
        if (!track) return;

        // The track contains 2 identical sets of cards (for seamless loop).
        // Once we've scrolled past one full set, reset to 0.
        const singleSetWidth = clients.length * (cardWidth + gap);

        const step = () => {
            if (!pausedRef.current) {
                posRef.current += speed;
                if (posRef.current >= singleSetWidth) {
                    posRef.current = 0;
                }
                if (track) {
                    track.style.transform = `translateX(-${posRef.current}px)`;
                }
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafRef.current);
    }, [clients, speed, cardWidth, gap]);

    // ── Pause helpers ──────────────────────────────────────────────────────────
    const pause = () => (pausedRef.current = true);
    const resume = () => (pausedRef.current = false);

    // ── Skeleton ───────────────────────────────────────────────────────────────
    if (loading) {
        return (
            <div className={`overflow-hidden ${className}`}>
                <div className="flex gap-6 px-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="animate-pulse rounded-2xl bg-white border border-gray-100 shadow-sm flex-shrink-0"
                            style={{ width: cardWidth, height: cardHeight + (showName ? 40 : 0) }}
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={`text-center py-6 text-red-500 text-sm ${className}`}>
                {error}
            </div>
        );
    }

    if (!clients.length) return null;

    // Duplicate the client list for seamless looping
    const displayClients = [...clients, ...clients];

    return (
        <div
            className={`overflow-hidden relative ${className}`}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resume}
            style={{
                /* Fade edges */
                WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                maskImage:
                    'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >
            {/* Scrolling track */}
            <div
                ref={trackRef}
                className="flex will-change-transform"
                style={{ gap, paddingBlock: '12px' }}
            >
                {displayClients.map((client, idx) => (
                    <a
                        key={`${client.id}-${idx}`}
                        href={client.website !== '#' ? client.website : undefined}
                        target={client.website !== '#' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={`Visit ${client.name}`}
                        className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        style={{
                            width: cardWidth,
                            minHeight: cardHeight + (showName ? 48 : 0),
                            padding: '16px 12px',
                        }}
                    >
                        <div
                            className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-50"
                            style={{ width: cardWidth - 32, height: cardHeight }}
                        >
                            <img
                                src={client.logoUrl}
                                alt={client.name}
                                loading="lazy"
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    e.currentTarget.src = '/images/logo.jpg';
                                }}
                            />
                        </div>
                        {showName && (
                            <p className="mt-2 text-xs font-semibold text-gray-700 text-center truncate w-full px-1">
                                {client.name}
                            </p>
                        )}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ClientsScrollCarousel;
