'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaEye, FaHeart, FaCog, FaThermometerHalf, FaCar, FaIndustry, FaUsers, FaHandshake, FaTruck, FaAward, FaGlobe, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
import CompanyOverview from './CompanyOverview';
import MissionVision from './MissionVision';
import ProductsServices from './ProductsServices';
import ClientsDealers from './ClientsDealers';
import WhyChooseUs from './WhyChooseUs';

const AboutPage = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: 'Company Overview', icon: FaBuilding },
        { id: 'mission', label: 'Mission & Vision', icon: FiTarget },
        { id: 'products', label: 'Products & Services', icon: FaCog },
        { id: 'clients', label: 'Clients & Dealers', icon: FaUsers },
        { id: 'why-us', label: 'Why Choose Us', icon: FaAward }
    ];

    const stats = [
        {
            icon: FaBuilding,
            number: '15+',
            label: 'Years Experience',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaUsers,
            number: '500+',
            label: 'Happy Clients',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaGlobe,
            number: 'Pan-India',
            label: 'Presence',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: FaIndustry,
            number: '3+',
            label: 'Industries Served',
            color: 'from-purple-500 to-pink-500'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="text-black  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-black"
                    >
                        <h1 className="text-4xl text-[#E06B80] md:text-5xl font-bold mb-6">
                            About Dokania Tech Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-[#3d000b] max-w-3xl mx-auto">
                            Leading pan-India importer and distributor of DGTW Hydrox Brazing Solutions, and trusted manufacturer of EPS machinery spare parts.
                        </p>
                    </motion.div>
                </div>
            </section>

           

            {/* Navigation Tabs */}
            <section className="py-8 bg-white border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2">
                        {sections.map((section) => (
                            <motion.button
                                key={section.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeSection === section.id
                                    ? 'bg-[#CD2C58] text-white shadow-lg cursor-pointer'
                                    : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                                    }`}
                            >
                                <section.icon size={16} />
                                <span>{section.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {activeSection === 'overview' && <CompanyOverview />}
                    {activeSection === 'mission' && <MissionVision />}
                    {activeSection === 'products' && <ProductsServices />}
                    {activeSection === 'clients' && <ClientsDealers />}
                    {activeSection === 'why-us' && <WhyChooseUs />}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Partner with Us?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join our growing network of satisfied clients and experience the difference our solutions can make for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                Get in Touch
                            </motion.a>
                            <motion.a
                                href="/products"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-200"
                            >
                                View Our Products
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
