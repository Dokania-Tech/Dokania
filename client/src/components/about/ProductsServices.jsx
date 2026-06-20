'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaThermometerHalf, FaCar, FaIndustry, FaWrench, FaTruck, FaTools, FaArrowRight } from 'react-icons/fa';

const ProductsServices = () => {
    const products = [
        {
            id: 1,
            title: 'DGTW Hydrox Brazing Solutions (Korea)',
            icon: FaWrench,
            description: 'Import and distribution of high-performance brazing solutions tailored for a wide range of applications.',
            features: [
                'High-performance brazing solutions',
                'Tailored for wide range of applications',
                'Suitable for HVAC, automotive, and industrial manufacturing',
                'Imported from Korea with quality assurance'
            ],
            industries: ['HVAC', 'Automotive', 'Industrial Manufacturing'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            title: 'EPS Machinery Spare Parts',
            icon: FaCog,
            description: 'Manufacturing and trading of spare parts for EPS machinery, focusing on durability and performance.',
            features: [
                'Manufactured and traded spare parts',
                'Focus on durability and performance',
                'Serving EPS, HVAC, and automotive industries',
                'Precision engineering and quality control'
            ],
            industries: ['EPS', 'HVAC', 'Automotive'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 3,
            title: 'HVAC Industry Solutions',
            icon: FaThermometerHalf,
            description: 'Comprehensive products and services for the HVAC sector, including installation, maintenance, and equipment distribution.',
            features: [
                'Comprehensive HVAC products and services',
                'Installation and maintenance support',
                'Equipment distribution including hose pipes, couplers',
                'Complete HVAC system solutions'
            ],
            industries: ['HVAC', 'Commercial Buildings', 'Industrial Facilities'],
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 4,
            title: 'Automobile Industry Solutions',
            icon: FaCar,
            description: 'Providing essential components, tools, and machinery to improve the efficiency of the automobile manufacturing process.',
            features: [
                'Essential automotive components',
                'Manufacturing tools and machinery',
                'Process efficiency improvements',
                'Quality automotive spare parts'
            ],
            industries: ['Automotive', 'Manufacturing', 'Assembly'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 5,
            title: 'Expanded Polystyrene (EPS) Industry Solutions',
            icon: FaIndustry,
            description: 'Tailored solutions for EPS manufacturers, including reliable machinery and spare parts.',
            features: [
                'Tailored EPS manufacturing solutions',
                'Reliable machinery and spare parts',
                'Specialized EPS industry expertise',
                'Complete EPS production support'
            ],
            industries: ['EPS Manufacturing', 'Packaging', 'Insulation'],
            color: 'from-teal-500 to-cyan-500'
        }
    ];

    const services = [
        {
            icon: FaTruck,
            title: 'Distribution & Logistics',
            description: 'Pan-India distribution network ensuring timely delivery of products to clients across the country.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaTools,
            title: 'Technical Support',
            description: 'Comprehensive technical support and maintenance services for all our products and solutions.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaWrench,
            title: 'Custom Solutions',
            description: 'Tailored solutions designed to meet specific client requirements and industry needs.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: FaIndustry,
            title: 'Manufacturing',
            description: 'In-house manufacturing capabilities for EPS machinery spare parts and custom components.',
            color: 'from-purple-500 to-pink-500'
        }
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
                    Products & Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Comprehensive solutions designed to meet the diverse needs of industries across India.
                </p>
            </motion.div>

            {/* Key Products */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Key Products</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        High-quality products imported and manufactured to meet industry standards.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Product Icon and Title */}
                                    <div className="lg:col-span-1">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center`}>
                                                <product.icon className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900">
                                                    {product.title}
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="lg:col-span-1">
                                        <h5 className="font-semibold text-gray-900 mb-3">Key Features:</h5>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start space-x-2">
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mt-2 flex-shrink-0`}></div>
                                                    <span className="text-gray-600 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Industries */}
                                    <div className="lg:col-span-1">
                                        <h5 className="font-semibold text-gray-900 mb-3">Serving Industries:</h5>
                                        <div className="flex flex-wrap gap-2">
                                            {product.industries.map((industry, industryIndex) => (
                                                <span
                                                    key={industryIndex}
                                                    className={`px-3 py-1 bg-gradient-to-r ${product.color} text-white text-xs font-medium rounded-full`}
                                                >
                                                    {industry}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Services */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive services to support your business needs and ensure success.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <service.icon className="text-white text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Why Our Products */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Why Choose Our Products & Services?
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We deliver excellence through quality, innovation, and customer-centric approach.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaWrench className="text-blue-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                        <p className="text-sm text-gray-600">
                            All products meet high industry standards with rigorous quality control processes.
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
                            <FaTruck className="text-green-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Timely Delivery</h4>
                        <p className="text-sm text-gray-600">
                            Reliable and fast delivery across India with our extensive distribution network.
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
                            <FaTools className="text-orange-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technical Support</h4>
                        <p className="text-sm text-gray-600">
                            Comprehensive technical support and maintenance services for all products.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaIndustry className="text-purple-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Industry Expertise</h4>
                        <p className="text-sm text-gray-600">
                            Deep understanding of HVAC, EPS, and automotive industry requirements.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaCog className="text-teal-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
                        <p className="text-sm text-gray-600">
                            Tailored solutions designed to meet specific client and industry needs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaArrowRight className="text-red-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h4>
                        <p className="text-sm text-gray-600">
                            Constantly evolving our products and services to meet changing industry needs.
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
                className="bg-white rounded-2xl shadow-xl p-8 text-center mt-8"
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Explore Our Solutions?
                </h3>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Discover how our products and services can help your business achieve greater efficiency and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                        href="/products"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 bg-[#CD2C58] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                    >
                        <span>View All Products</span>
                        <FaArrowRight />
                    </motion.a>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-6 py-3 border-2 border-g[#CD2C58] text-[#CD2C58] rounded-lg font-semibold hover:bg-[#CD2C58] hover:text-white transition-all duration-200"
                    >
                        <span>Get Custom Quote</span>
                        <FaArrowRight />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductsServices;
