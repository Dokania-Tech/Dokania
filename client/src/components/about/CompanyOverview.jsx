'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe, FaIndustry, FaCog, FaThermometerHalf, FaCar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const CompanyOverview = () => {
    const industries = [
        {
            icon: FaThermometerHalf,
            name: 'HVAC Industry',
            description: 'Comprehensive solutions for heating, ventilation, and air conditioning systems',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaCog,
            name: 'EPS Industry',
            description: 'Specialized machinery and spare parts for Expanded Polystyrene manufacturing',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaCar,
            name: 'Automobile Sector',
            description: 'Essential components and tools for automotive manufacturing processes',
            color: 'from-orange-500 to-red-500'
        }
    ];

    const keyPoints = [
        'Leading pan-India importer and distributor of DGTW Hydrox Brazing Solutions',
        'Trusted manufacturer and trader of EPS machinery spare parts',
        'Strong presence across multiple industries nationwide',
        'Committed to providing high-quality products and services',
        'Diverse client base across HVAC, EPS, and automobile sectors',
        'Nationwide dealer network ensuring easy access to products'
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
                    Company Overview
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Learn about our journey, expertise, and commitment to excellence in the technology solutions industry.
                </p>
            </motion.div>

            {/* Main Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Company Description */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaBuilding className="text-white text-xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Dokania Tech Solutions is a leading pan-India importer and distributor of DGTW Hydrox Brazing Solutions.
                            We are also a trusted manufacturer and trader of EPS machinery spare parts. With a strong presence across
                            multiple industries, including HVAC, EPS, and the automobile sector, we are committed to providing
                            high-quality products and services that meet the diverse needs of our clients.
                        </p>
                        <div className="space-y-3">
                            {keyPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                    <span className="text-gray-700">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Industries We Serve */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Industries We Serve</h3>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <industry.icon className="text-white text-xl" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                        {industry.name}
                                    </h4>
                                    <p className="text-gray-600 text-sm">
                                        {industry.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Company Values */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are dedicated to supporting the growth and success of our clients through innovative solutions and exceptional service.
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
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaGlobe className="text-white text-2xl" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Pan-India Reach</h4>
                        <p className="text-gray-600 text-sm">
                            Nationwide presence with extensive dealer network ensuring easy access to our products and services.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaIndustry className="text-white text-2xl" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                        <p className="text-gray-600 text-sm">
                            Years of experience in importing, distributing, and manufacturing high-quality products across multiple industries.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCheckCircle className="text-white text-2xl" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                        <p className="text-gray-600 text-sm">
                            All our products meet high industry standards and are reliable for use across various sectors.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Call to Action */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Experience Our Solutions?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Discover how our innovative products and services can help your business achieve greater efficiency and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                        href="/products"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-[#CD2C58] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                    >
                        <span>Explore Our Products</span>
                        <FaArrowRight />
                    </motion.a>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 border-2 border-[#CD2C58] text-[#CD2C58] rounded-lg font-semibold hover:bg-[#CD2C58] hover:text-white transition-all duration-200"
                    >
                        <span>Get in Touch</span>
                        <FaArrowRight />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default CompanyOverview;
