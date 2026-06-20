'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ClientLogos from './ClientLogos';

const ClientsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-20">
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
                            Brands that trust us. Explore a selection of our valued clients
                            across industries.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8"
                    >
                        <ClientLogos />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ClientsPage;
