"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ClientsScrollCarousel from '@/components/common/ClientsScrollCarousel';

const ClientsSection = () => {
    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2
                        className="
                            text-3xl font-extrabold text-white
                            bg-gradient-to-r from-pink-500 to-rose-600
                            px-6 py-3 rounded-xl
                            shadow-[0_8px_0_rgb(190,24,93)]
                            inline-block
                            hover:translate-y-1
                            hover:shadow-[0_4px_0_rgb(190,24,93)]
                            transition-all duration-200
                        "
                    >
                        Trusted Clients
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Companies across industries rely on our products and services.
                    </p>
                </motion.div>

                {/* Horizontal auto-scroll carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <ClientsScrollCarousel
                        speed={0.6}
                        cardWidth={200}
                        cardHeight={100}
                        gap={24}
                        showName={true}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;