'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaThermometerHalf, FaCog, FaCar, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ClientsDealers = () => {
    const [activeTab, setActiveTab] = useState('clients');

    const tabs = [
        { id: 'clients', label: 'Our Clients', icon: FaBuilding },
        { id: 'dealers', label: 'Authorized Dealers', icon: FaHandshake }
    ];

    const industries = [
        {
            id: 'hvac',
            name: 'HVAC Industry',
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500',
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
                'Next Generation Manufacturers Pvt Ltd.'
            ]
        },
        {
            id: 'eps',
            name: 'EPS Industry',
            icon: FaCog,
            color: 'from-green-500 to-emerald-500',
            clients: [
                'Vardhman Thermopack',
                'Prakash Packaging',
                'Kiran Packaging',
                'Meps Packaging Pvt Ltd',
                'Perfect Pack',
                'KR Thermopack',
                'Stryo Pack Pvt Ltd',
                'Premium Packaging',
                'Shiva Thermopack',
                'Ganga Thermopack',
                'Maa Ganga Thermopack',
                'Mahadev Thermopack',
                'Thermopackers',
                'Prakash Corogative',
                'Rishika Packaging',
                'Lao Pala Rg Ltd.',
                'Balaji Glass Pvt Ltd.',
                'Ambika Packers',
                'Dhanlakshmi Packaging'
            ]
        },
        {
            id: 'automotive',
            name: 'Automobile Sector',
            icon: FaCar,
            color: 'from-orange-500 to-red-500',
            clients: [
                'Hero Moto Corp Ltd.',
                'Yamaha India Ltd.',
                'Sandhar Engg Ltd.',
                'Suzuki Motors'
            ]
        }
    ];

    const dealers = [
        {
            name: 'SD Enterprises',
            industry: 'HVAC',
            location: 'Nangloi,Delhi',
            
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Shiv Shakti Engineering Works',
            industry: 'EPS',
            location: 'Noida,Utter Pradesh',
           
            icon: FaCog,
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'Ekta Enterprises',
            industry: 'Automobile Sector',
            location: 'Gurugram, Haryana',
            
            icon: FaCar,
            color: 'from-orange-500 to-red-500'
        },
        {
            name: 'L-tech Automation System',
            industry: 'Automobile Sector',
            location: 'Laxminagar, New Delhi',
            contact: '+91 9876543213',
            email: 'info@ltechautomation.com',
            icon: FaCar,
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const stats = [
        { label: 'Total Clients', value: '500+', icon: FaUsers },
        { label: 'Authorized Dealers', value: '4+', icon: FaHandshake },
        { label: 'Industries Served', value: '3+', icon: FaBuilding },
        { label: 'Years Experience', value: '15+', icon: FaBuilding }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Clients & Dealers
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    We are proud to have a wide network of dealers across India and serve leading companies in various industries.
                </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
                    >
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                            <stat.icon className="text-white text-xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {stat.value}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#016B61] rounded-lg p-2">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center  px-16 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-[#CD2C58]  text-white cursor-pointer shadow-lg'
                                    : 'text-white hover:text-white cursor-pointer'
                                }`}
                        >
                            <tab.icon size={16} />
                            <span>{tab.label}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Clients Section */}
            {activeTab === 'clients' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            {/* Industry Header */}
                            <div className={`bg-gradient-to-r ${industry.color} p-6`}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <industry.icon className="text-white text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {industry.name}
                                        </h3>
                                        <p className="text-white/90">
                                            {industry.clients.length} clients
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Clients Grid */}
                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {industry.clients.map((client, clientIndex) => (
                                        <motion.div
                                            key={clientIndex}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: clientIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <div className={`w-8 h-8 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                                <FaBuilding className="text-white text-sm" />
                                            </div>
                                            <span className="text-gray-700 font-medium text-sm">
                                                {client}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}

            {/* Dealers Section */}
            {activeTab === 'dealers' && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Our Authorized Dealers
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We have a wide network of authorized dealers across India, covering key markets in the HVAC, EPS, and automobile industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dealers.map((dealer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${dealer.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                        <dealer.icon className="text-white text-2xl" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                            {dealer.name}
                                        </h4>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                                                    {dealer.industry}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-600">
                                                <FaMapMarkerAlt size={14} />
                                                <span className="text-sm">{dealer.location}</span>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Why Our Network */}
            <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Why Our Network Matters
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our extensive network ensures that we can serve clients across India with ease and efficiency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaMapMarkerAlt className="text-blue-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Pan-India Reach</h4>
                        <p className="text-sm text-gray-600">
                            Nationwide dealer network ensures easy access to our products and services anywhere in India.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaHandshake className="text-green-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Trusted Partners</h4>
                        <p className="text-sm text-gray-600">
                            Authorized dealers with proven track records and deep industry expertise.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaUsers className="text-orange-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Local Support</h4>
                        <p className="text-sm text-gray-600">
                            Local dealers provide personalized support and quick response to client needs.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ClientsDealers;
