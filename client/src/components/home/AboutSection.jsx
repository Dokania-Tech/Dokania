'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaCog, FaShieldAlt, FaRocket, FaHandshake } from 'react-icons/fa';

const AboutSection = () => {
    const stats = [
        { number: '500+', label: 'Happy Clients', icon: FaUsers },
        { number: '1000+', label: 'Products Delivered', icon: FaCog },
        { number: '15+', label: 'Years Experience', icon: FaAward },
        { number: '99%', label: 'Customer Satisfaction', icon: FaShieldAlt }
    ];

    const values = [
        {
            icon: FaRocket,
            title: 'Innovation',
            description: 'We continuously innovate to bring cutting-edge solutions to our clients.',
            color: 'bg-[#E06B80]'
        },
        {
            icon: FaShieldAlt,
            title: 'Quality',
            description: 'Every product undergoes rigorous quality checks to ensure excellence.',
            color: 'bg-[#E06B80]'
        },
        {
            icon: FaHandshake,
            title: 'Partnership',
            description: 'We build long-term relationships based on trust and mutual success.',
            color: 'bg-[#E06B80]'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="text-transparent bg-clip-text bg-[#E06B80]">Dokania</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a leading manufacturer that prioritizes quality and reliability to refine all your work a step further and provide products that meet the demands of customers.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Company Description */}
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-lg text-gray-700 leading-relaxed"
                            >
                                Dokania Tech Solutions imports DGTW Hydrox Brazing Solutions and manufactures EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India with reliable, high-quality products and services.
                               
                            </motion.p>

                            
                        </div>

                        {/* Values */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <value.icon className="text-white text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-gray-600">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Stats & Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-200"
                                >
                                    <div className="w-12 h-12 bg-[#E06B80] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="text-white text-xl" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Company Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="relative bg-[#E06B80] rounded-2xl p-8 text-white"
                        >
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-2xl font-bold">DTS</span>
                                </div>
                                <h3 className="text-2xl font-bold">Excellence in Every Product</h3>
                                <p className="text-white/90">
                                    We are committed to delivering products that exceed expectations and drive success for our clients.
                                </p>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white text-sm">✓</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                            >
                                <span className="text-white text-sm">★</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gray-900 rounded-2xl w-full shadow-xl p-8 mx-auto
">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Ready to Experience Excellence?
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Join hundreds of satisfied customers who trust Dokania Tech Solutions for their industrial needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 bg-white cursor-pointer border-2 border-[#CD2C58] text-[#CD2C58] rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                Contact Us
                            </motion.button>
                            </a>
                            <a href="/about">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                  className="px-12 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-[#CD2C58] hover:border-[#CD2C58]  bg-[#CD2C58]  cursor-pointer hover:text-white transition-all duration-500"
                        >
                            
                                Learn More
                            </motion.button>
                            </a>
                        </div>
                    </div>
                </motion.div>            </div>
        </section>
    );
};

export default AboutSection;
