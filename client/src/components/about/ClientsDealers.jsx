'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaBuilding, FaHandshake, FaThermometerHalf, FaCog,
    FaCar, FaUsers, FaMapMarkerAlt
} from 'react-icons/fa';

/* ─── Data ────────────────────────────────────────────────────────────── */
const industries = [
    {
        id: 'hvac',
        name: 'HVAC Industry',
        icon: FaThermometerHalf,
        gradient: 'from-sky-500 to-cyan-400',
        bg: 'bg-sky-50',
        badge: 'bg-sky-100 text-sky-700',
        dot: 'bg-sky-500',
        clients: [
            'Godrej & Boyce Manufacturing Ltd.',
            'Virtuoso Optoelectronics Ltd.',
            'Carrier',
            'Toshiba Carrier',
            'EMM ESS Aircon Pvt. Ltd.',
            'Techno Aircon Pvt Ltd.',
            'Malhotra Electronics Pvt Ltd.',
            'E-Pack Durables Ltd.',
            'Amber Enterprises India Ltd.',
            'Blue Star Ltd.',
            'Voltas Ltd.',
            'Danvita India Pvt Ltd.',
            'Ezentech India Pvt Ltd.',
            'PG Technoplast Pvt Ltd.',
            'Next Generation Manufacturers Pvt Ltd.',
        ],
    },
    {
        id: 'eps',
        name: 'EPS Industry',
        icon: FaCog,
        gradient: 'from-emerald-500 to-teal-400',
        bg: 'bg-emerald-50',
        badge: 'bg-emerald-100 text-emerald-700',
        dot: 'bg-emerald-500',
        clients: [
            'Vardhman Thermopack', 'Prakash Packaging', 'Kiran Packaging',
            'Meps Packaging Pvt Ltd', 'Perfect Pack', 'KR Thermopack',
            'Stryo Pack Pvt Ltd', 'Premium Packaging', 'Shiva Thermopack',
            'Ganga Thermopack', 'Maa Ganga Thermopack', 'Mahadev Thermopack',
            'Thermopackers', 'Prakash Corogative', 'Rishika Packaging',
            'Lao Pala Rg Ltd.', 'Balaji Glass Pvt Ltd.', 'Ambika Packers',
            'Dhanlakshmi Packaging',
        ],
    },
    {
        id: 'auto',
        name: 'Automobile Sector',
        icon: FaCar,
        gradient: 'from-orange-500 to-rose-400',
        bg: 'bg-orange-50',
        badge: 'bg-orange-100 text-orange-700',
        dot: 'bg-orange-500',
        clients: [
            'Hero Moto Corp Ltd.', 'Yamaha India Ltd.',
            'Sandhar Engg Ltd.', 'Suzuki Motors',
        ],
    },
];

const dealers = [
    {
        name: 'SD Enterprises',
        industry: 'HVAC',
        location: 'Nangloi, Delhi',
        icon: FaThermometerHalf,
        gradient: 'from-sky-500 to-cyan-400',
        badge: 'bg-sky-100 text-sky-700',
    },
    {
        name: 'Shiv Shakti Engineering Works',
        industry: 'EPS',
        location: 'Noida, Uttar Pradesh',
        icon: FaCog,
        gradient: 'from-emerald-500 to-teal-400',
        badge: 'bg-emerald-100 text-emerald-700',
    },
    {
        name: 'FNA Industrial Corpration',
        industry: 'Automobile Sector',
        location: 'Greator Noida, UP',
        icon: FaCar,
        gradient: 'from-orange-500 to-rose-400',
        badge: 'bg-orange-100 text-orange-700',
    },
    {
        name: 'L-tech Automation System',
        industry: 'Automobile Sector',
        location: 'Laxminagar, New Delhi',
        icon: FaCar,
        gradient: 'from-violet-500 to-purple-400',
        badge: 'bg-violet-100 text-violet-700',
    },
];

const stats = [
    { label: 'Total Clients', value: '500+', icon: FaUsers, gradient: 'from-pink-500 to-rose-400' },
    { label: 'Authorized Dealers', value: '4+', icon: FaHandshake, gradient: 'from-violet-500 to-purple-400' },
    { label: 'Industries Served', value: '3+', icon: FaBuilding, gradient: 'from-sky-500 to-cyan-400' },
    { label: 'Years Experience', value: '15+', icon: FaCog, gradient: 'from-emerald-500 to-teal-400' },
];

const networkPoints = [
    {
        icon: FaMapMarkerAlt,
        color: 'text-sky-500',
        bg: 'bg-sky-50',
        title: 'Pan-India Reach',
        desc: 'Nationwide dealer network ensures easy access to our products anywhere in India.',
    },
    {
        icon: FaHandshake,
        color: 'text-emerald-500',
        bg: 'bg-emerald-50',
        title: 'Trusted Partners',
        desc: 'Authorized dealers with proven track records and deep industry expertise.',
    },
    {
        icon: FaUsers,
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        title: 'Local Support',
        desc: 'Local dealers provide personalized support and quick response to client needs.',
    },
];

/* ─── Sub-components ─────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
});

const ClientsDealers = () => {
    const [activeTab, setActiveTab] = useState('clients');

    return (
        <div className="max-w-6xl mx-auto">

            {/* ── Heading ─────────────────────────────────────────── */}
            <motion.div {...fadeUp()} className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-rose-50 text-rose-500 text-sm font-semibold tracking-wide mb-3">
                    Network
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Our Clients &amp; Dealers
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    We are proud to have a wide network of dealers across India and serve leading
                    companies in various industries.
                </p>
            </motion.div>

            {/* ── Stats ───────────────────────────────────────────── */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((s, i) => (
                    <motion.div
                        key={i}
                        {...fadeUp(i * 0.08)}
                        className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center group hover:shadow-md transition-shadow duration-300"
                    >
                        {/* gradient top bar */}
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.gradient}`} />
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-sm`}>
                            <s.icon className="text-white text-xl" />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* ── Tab Bar ─────────────────────────────────────────── */}
            <div className="flex justify-center mb-8">
                <div className="flex gap-2 bg-gray-100 p-1.5 rounded-xl shadow-inner">
                    {[
                        { id: 'clients', label: 'Our Clients', icon: FaBuilding },
                        { id: 'dealers', label: 'Authorized Dealers', icon: FaHandshake },
                    ].map((tab) => (
                        <motion.button
                            key={tab.id}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                activeTab === tab.id
                                    ? 'bg-white text-rose-600 shadow-md'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <tab.icon size={14} />
                            {tab.label}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* ── Tab Content ─────────────────────────────────────── */}
            <AnimatePresence mode="wait">
                {activeTab === 'clients' && (
                    <motion.div
                        key="clients"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="space-y-6"
                    >
                        {industries.map((ind, idx) => (
                            <motion.div
                                key={ind.id}
                                {...fadeUp(idx * 0.1)}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                            >
                                {/* Industry header */}
                                <div className={`bg-gradient-to-r ${ind.gradient} px-6 py-5 flex items-center gap-4`}>
                                    <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                        <ind.icon className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                                        <p className="text-white/80 text-sm">{ind.clients.length} clients</p>
                                    </div>
                                </div>

                                {/* Client pills */}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2">
                                        {ind.clients.map((c, ci) => (
                                            <motion.span
                                                key={ci}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.25, delay: ci * 0.03 }}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${ind.badge} border border-current/10`}
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full ${ind.dot}`} />
                                                {c}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {activeTab === 'dealers' && (
                    <motion.div
                        key="dealers"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Authorized Dealers</h3>
                            <p className="text-gray-500 max-w-xl mx-auto text-sm">
                                A wide network covering key markets in HVAC, EPS, and Automobile industries.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {dealers.map((d, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeUp(i * 0.1)}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                                >
                                    <div className={`h-1.5 bg-gradient-to-r ${d.gradient}`} />
                                    <div className="p-6 flex items-start gap-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center shadow-sm flex-shrink-0`}>
                                            <d.icon className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-gray-900 mb-1">{d.name}</h4>
                                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${d.badge} mb-2`}>
                                                {d.industry}
                                            </span>
                                            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                                                <FaMapMarkerAlt size={12} />
                                                <span>{d.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Why Our Network ─────────────────────────────────── */}
            <motion.div
                {...fadeUp(0.1)}
                className="mt-14 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm p-8"
            >
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Our Network Matters</h3>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                        Our extensive network ensures we can serve clients across India with ease and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {networkPoints.map((pt, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp(0.1 + i * 0.1)}
                            className="flex flex-col items-center text-center"
                        >
                            <div className={`w-12 h-12 ${pt.bg} rounded-full flex items-center justify-center mb-3`}>
                                <pt.icon className={`${pt.color} text-xl`} />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">{pt.title}</h4>
                            <p className="text-sm text-gray-500">{pt.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ClientsDealers;
