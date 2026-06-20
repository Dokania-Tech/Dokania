"use client";

import React from 'react';
import { motion } from 'framer-motion';


const ClientsSection = ({ clients = [] }) => {
    // Default placeholder clients (served from public/)
    const defaultClients = [
        { name: 'Panasonic', logo: '/images/2.png' },
        { name: 'Virtuoso Optoelectronic', logo: '/images/1.png' },
        { name: 'Voltas', logo: '/images/4.png' },
        { name: 'Blue Star', logo: '/images/5.png' },
    ];

    // Normalize clients: accept array of strings or objects
    const normalized = (clients && clients.length)
        ? clients.map(c => {
            if (typeof c === 'string') return { name: '', logo: c };
            return { name: c.name || c.company || '', logo: c.logoUrl || c.logo || c.image || '' };
        }).filter(x => x.logo)
        : defaultClients;

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
                    <h2 className="
  text-3xl font-extrabold text-white
  bg-gradient-to-r from-pink-500 to-rose-600
  px-6 py-3 rounded-xl
  shadow-[0_8px_0_rgb(190,24,93)]
  w-8xl
  text-center
  hover:translate-y-1
  hover:shadow-[0_4px_0_rgb(190,24,93)]
  transition-all duration-200
">
                        Trusted Clients
                    </h2>
                    <p className="text-gray-600 mt-4">Companies across industries rely on our products and services.</p>
                </motion.div>

                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                    {normalized.map((c, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                            <img src={c.logo} alt={c.name || `client-${i}`} className="max-h-30 object-contain" />
                            <p className="text-gray-600 mt-3 text-2xl font-medium">{c.name || 'Trusted Partner'}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;