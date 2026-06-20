'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaCog, FaTruck, FaAward, FaCheckCircle, FaArrowRight, FaShieldAlt, FaLightbulb, FaHandshake, FaClock, FaTrophy } from 'react-icons/fa';

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: FaGlobe,
            title: 'Pan-India Reach',
            description: 'With a nationwide dealer network, we provide easy access to our products and services anywhere in India.',
            color: 'from-blue-500 to-cyan-500',
            features: [
                'Nationwide distribution network',
                'Local dealer support',
                'Quick delivery across India',
                'Regional expertise and knowledge'
            ]
        },
        {
            icon: FaUsers,
            title: 'Expertise & Experience',
            description: 'Years of experience in importing, distributing, and manufacturing high-quality products across multiple industries.',
            color: 'from-green-500 to-emerald-500',
            features: [
                '15+ years of industry experience',
                'Deep technical knowledge',
                'Proven track record',
                'Continuous learning and improvement'
            ]
        },
        {
            icon: FaCog,
            title: 'Customer Focus',
            description: 'Tailored solutions to meet the specific needs of each industry and client, ensuring maximum satisfaction.',
            color: 'from-orange-500 to-red-500',
            features: [
                'Customized solutions',
                'Industry-specific expertise',
                'Personalized service',
                'Long-term partnerships'
            ]
        },
        {
            icon: FaTruck,
            title: 'Timely Delivery',
            description: 'Reliable and fast delivery of products to ensure minimal downtime and operational efficiency for our clients.',
            color: 'from-purple-500 to-pink-500',
            features: [
                'Fast and reliable delivery',
                'Minimal downtime',
                'Operational efficiency',
                'Supply chain optimization'
            ]
        }
    ];

    const additionalBenefits = [
        {
            icon: FaShieldAlt,
            title: 'Quality Assurance',
            description: 'All products meet high industry standards with rigorous quality control processes.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'Continuously introducing new and advanced solutions to keep pace with technological advancements.',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaHandshake,
            title: 'Integrity',
            description: 'We operate with transparency and honesty, establishing long-term relationships with our clients.',
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: FaClock,
            title: '24/7 Support',
            description: 'Round-the-clock technical support and customer service to address any concerns.',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: FaAward,
            title: 'Industry Recognition',
            description: 'Recognized by leading companies and industry associations for our excellence.',
            color: 'from-teal-500 to-cyan-500'
        },
        {
            icon: FaTrophy,
            title: 'Proven Results',
            description: 'Track record of successful implementations and satisfied clients across industries.',
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    const testimonials = [
        {
            quote: "Dokania Tech Solutions has been our trusted partner for over 5 years. Their quality and service are unmatched.",
            author: "Rajesh Kumar, Thermal Solutions India",
            company: "HVAC Industry"
        },
        {
            quote: "The precision and reliability of their EPS machinery parts have significantly improved our production efficiency.",
            author: "Priya Sharma, EPS Manufacturing Co.",
            company: "EPS Industry"
        },
        {
            quote: "Their automotive solutions have helped us maintain the highest quality standards in our manufacturing process.",
            author: "Amit Patel, AutoTech Industries",
            company: "Automotive Sector"
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
                    Why Choose Us?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Discover what makes us the preferred choice for leading companies across India.
                </p>
            </motion.div>

            {/* Main Reasons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex items-start space-x-4 mb-6">
                                <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                    <reason.icon className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {reason.features.map((feature, featureIndex) => (
                                    <motion.div
                                        key={featureIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3"
                                    >
                                        <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Benefits */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Additional Benefits
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Beyond our core strengths, we offer additional advantages that set us apart from the competition.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {additionalBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <benefit.icon className="text-white text-2xl" />
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                {benefit.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Client Testimonials */}
            <div className="mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experience working with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                        >
                            <div className="flex items-start space-x-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">"</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-700 italic mb-3">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-gray-600 text-xs">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
