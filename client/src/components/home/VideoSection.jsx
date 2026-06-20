"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * VideoSection
 * Props:
 *  - videoUrl (string) legacy single url
 *  - videos (array) preferred: array of urls (strings) or objects { url, poster }
 *  - autoplay (boolean)
 */
const VideoSection = ({ videoUrl = '', videos = [], autoplay = true }) => {
    // prepare list: prefer `videos` prop, else fallback to videoUrl, else sensible defaults
    // NOTE: limited to 2 videos as requested
    const defaultList = ['/videos/video.mp4', '/videos/video3.mp4'];
    const list = (Array.isArray(videos) && videos.length) ? videos : (videoUrl ? [videoUrl] : defaultList);

    // map to normalized entries { url, poster } and limit to 2
    const entries = list.slice(0, 2).map((item) => {
        if (typeof item === 'string') return { url: item, poster: '' };
        return { url: item.url || item.src || '', poster: item.poster || '' };
    });

    // per-video error state
    const [errors, setErrors] = useState({});

    const setErrorAt = (idx) => setErrors((s) => ({ ...s, [idx]: true }));

    const isVideoFile = (u) => typeof u === 'string' && /\.(mp4|webm|ogg)(\?.*)?$/.test(u);
    const isYouTube = (u) => typeof u === 'string' && /youtube\.com|youtu\.be/.test(u);
    const isLocal = (u) => typeof u === 'string' && u.startsWith('/');

    const getYouTubeEmbed = (url) => {
        try {
            let id = null;
            const byId = /youtu\.be\/(.+)$/.exec(url);
            if (byId) id = byId[1].split('?')[0];
            if (!id) {
                const m = url.match(/[?&]v=([^&]+)/);
                if (m && m[1]) id = m[1];
            }
            if (!id) {
                const em = url.match(/embed\/([^?]+)/);
                if (em && em[1]) id = em[1];
            }
            if (id) {
                if (autoplay) return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&rel=0`;
                return `https://www.youtube.com/embed/${id}`;
            }
            return url;
        } catch (e) {
            return url;
        }
    };

    return (
        <section className="py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#E06B80]">Watch Our Introduction</h2>
                    <p className="text-gray-600 mt-2">A short overview of our capabilities and services.</p>
                </motion.div>

                {/* Grid for 2 videos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {entries.map((entry, idx) => {
                        const url = entry.url;
                        const poster = entry.poster;
                        const local = isLocal(url);
                        const videoFile = isVideoFile(url);
                        const youtube = isYouTube(url);
                        const embedUrl = youtube ? getYouTubeEmbed(url) : url;

                        return (
                            <div key={idx} className="w-full">
                                <div className="relative" style={{ paddingTop: '56.25%' }}>
                                    {!errors[idx] && (videoFile || local) ? (
                                        <video
                                            src={url}
                                            poster={poster}
                                            controls
                                            onError={() => setErrorAt(idx)}
                                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg object-cover"
                                            autoPlay={autoplay}
                                            muted={autoplay}
                                            loop={autoplay}
                                            playsInline
                                        />
                                    ) : !errors[idx] && youtube ? (
                                        <iframe
                                            src={embedUrl}
                                            title={`video-${idx}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg border"
                                        />
                                    ) : errors[idx] ? (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                            <div className="text-center px-4">
                                                <p className="text-gray-700 mb-2">Video not available</p>
                                                <p className="text-sm text-gray-600">{url}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                                            <div className="text-center px-4">
                                                <p className="text-gray-700 mb-2">Invalid video source</p>
                                                <p className="text-sm text-gray-600">{url}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
