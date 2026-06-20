'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const CTASection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Phone',
            value: '+91 9205960101',
            link: 'tel:+919205960101'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            value: 'info@dokaniatech.com',
            link: 'mailto:info@dokaniatech.com'
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            value: 'C229 SECTOR 10, NOIDA | UTTAR PRADESH - 201301',
            link: '#'
        }
    ];

    const industries = [
        'Aerospace',
        'Automobile',
        'Air-conditioning / Refrigerator',
        'Air Tools / Equipment',
        'Chemical',
        'Food / Beverages',
        'Mold',
        'Semiconductor',
        'Shipbuilding',
        'Welding',
        'Others'
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Contact us today to discuss your requirements and discover how our products can help your business succeed.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                We're here to help you find the perfect solutions for your industrial needs. Reach out to us through any of the channels below.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200"
                                >
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                        <contact.icon className="text-black text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{contact.title}</h4>
                                        <p className="text-gray-300">{contact.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white text-black rounded-xl p-6"
                        >
                            <h4 className="text-xl font-bold mb-3">Why Choose Us?</h4>
                            <ul className="space-y-2 text-black">
                                <li className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-black" />
                                    <span>15+ Years of Experience</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-black" />
                                    <span>500+ Happy Clients</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-black" />
                                    <span>99% Customer Satisfaction</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <FaCheckCircle className="text-black" />
                                    <span>Quality Guaranteed</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-300">Thank you for your interest. We'll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2  focus:ring-white focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                            placeholder="your@email.com"
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                            placeholder="+91 1234567890"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                            placeholder="Your company name"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Industry
                                    </label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                                    >
                                        <option value="">Select your industry</option>
                                        {industries.map((industry, index) => (
                                            <option key={index} value={industry}>
                                                {industry}
                                            </option>
                                        ))}
                                    </select>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    viewport={{ once: true }}
                                    className="w-full flex items-center justify-center space-x-2 py-4 bg-white to-orange-500 text-black cursor-pointer  rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                                >
                                    <FaPaperPlane />
                                    <span>Send Message</span>
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
