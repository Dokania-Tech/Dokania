'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ClientsScrollCarousel from '@/components/common/ClientsScrollCarousel';
import ClientsDealers from '@/components/about/ClientsDealers';

const ClientsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* ── Page Hero ─────────────────────────────────────────── */}
            <section className="py-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#E06B80] mb-4">
                            Our Clients
                        </h1>
                        <p className="text-lg md:text-xl text-[#3d000b] max-w-3xl mx-auto">
                            Brands that trust us. Explore our valued clients and authorised dealers
                            across industries.
                        </p>
                    </motion.div>

                    {/* ── Horizontal logo carousel ─────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-10 mb-16"
                    >
                        <ClientsScrollCarousel
                            speed={0.5}
                            cardWidth={200}
                            cardHeight={110}
                            gap={28}
                            showName={true}
                        />
                    </motion.div>

                    {/* ── Clients & Dealers detail section ─────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                    >
                        <ClientsDealers />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ClientsPage;
