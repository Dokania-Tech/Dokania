'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaHeart, FaLightbulb, FaUsers, FaShieldAlt, FaLeaf, FaCheckCircle } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";

const MissionVision = () => {
    const mission = {
        icon: FiTarget,
        title: 'Our Mission',
        description: 'To deliver reliable, efficient, and innovative technological solutions to industries across India. By partnering with top manufacturers and maintaining a commitment to excellence, we aim to support the growth of the HVAC, EPS, and automobile industries through superior products and services.',
        color: 'from-blue-500 to-cyan-500'
    };

    const vision = {
        icon: FaEye,
        title: 'Our Vision',
        description: 'To become the leading distributor and manufacturer in India for cutting-edge technological solutions and products, offering exceptional customer service and innovative solutions for the HVAC, EPS, and automobile industries.',
        color: 'from-green-500 to-emerald-500'
    };

    const coreValues = [
        {
            icon: FaShieldAlt,
            title: 'Quality',
            description: 'We ensure that all our products meet high industry standards and are reliable for use across various sectors.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'Continuously introducing new and advanced solutions to keep pace with technological advancements.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: FaUsers,
            title: 'Customer-Centric',
            description: 'We prioritize the needs of our customers and work towards providing customized solutions.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: FaHeart,
            title: 'Integrity',
            description: 'We operate with transparency and honesty, establishing long-term relationships with our clients and partners.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaLeaf,
            title: 'Sustainability',
            description: 'We aim to contribute positively to the environment by providing eco-friendly solutions.',
            color: 'from-teal-500 to-cyan-500'
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
                    Mission, Vision & Values
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our guiding principles that drive our commitment to excellence and customer satisfaction.
                </p>
            </motion.div>

            {/* Mission and Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500"
                >
                    <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${mission.color} rounded-full flex items-center justify-center`}>
                            <mission.icon className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{mission.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {mission.description}
                    </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500"
                >
                    <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${vision.color} rounded-full flex items-center justify-center`}>
                            <vision.icon className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{vision.title}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {vision.description}
                    </p>
                </motion.div>
            </div>

            {/* Core Values */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Our Core Values
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        The fundamental principles that guide our business operations and relationships.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                        >
                            <div className="text-center">
                                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <value.icon className="text-white text-2xl" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Values in Action */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Values in Action
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        How we translate our values into tangible benefits for our clients and partners.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaCheckCircle className="text-blue-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                        <p className="text-sm text-gray-600">
                            Rigorous testing and quality control processes ensure every product meets our high standards.
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
                            <FaCheckCircle className="text-green-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Innovation Focus</h4>
                        <p className="text-sm text-gray-600">
                            Continuous research and development to bring cutting-edge solutions to market.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaCheckCircle className="text-purple-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Customer Success</h4>
                        <p className="text-sm text-gray-600">
                            Dedicated support teams and customized solutions tailored to client needs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <FaCheckCircle className="text-teal-600 text-xl" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h4>
                        <p className="text-sm text-gray-600">
                            Eco-friendly solutions and responsible business practices for long-term success.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
