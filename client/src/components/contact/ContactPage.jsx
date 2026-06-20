'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle, FaUser, FaBuilding, FaMessage } from 'react-icons/fa';
import ContactForm from './ContactForm';
import MapComponent from './MapComponent';

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            details: [
                'C229 SECTOR 10, NOIDA',
                'UTTAR PRADESH - 201301',
                'India'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: FaPhone,
            title: 'Phone',
            details: [
                '+91 9205553476',
                '+91 8130100529',
                'Mon-Fri: 9AM-6PM'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: [
                'info@dokaniatech.com',
                'sales@dokaniatech.com',
                'support@dokaniatech.com'
            ],
            color: 'from-orange-500 to-red-500'
        },
        {
            icon: FaClock,
            title: 'Business Hours',
            details: [
                'Monday - Friday: 9:00 AM - 6:00 PM',
                'Saturday: 9:00 AM - 2:00 PM',
                'Sunday: Closed'
            ],
            color: 'from-purple-500 to-pink-500'
        }
    ];

    const departments = [
        {
            name: 'Sales Department',
            email: 'sales@dokaniatech.com',
            phone: '+91 9205553476',
            description: 'For product inquiries, quotes, and sales support'
        },
        {
            name: 'Technical Support',
            email: 'support@dokaniatech.com',
            phone: '+91 9205960101',
            description: 'For technical assistance and product support'
        },
        {
            name: 'General Inquiries',
            email: 'info@dokaniatech.com',
            phone: '+91 9205553476 ',
            description: 'For general information and business inquiries'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Contact Information Cards */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#E06B80] mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-[#3a010b] max-w-2xl mx-auto">
                            Choose your preferred way to reach us. Our team is ready to assist you with any questions or requirements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                    <info.icon className="text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                    {info.title}
                                </h3>
                                <div className="space-y-2">
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-gray-600 text-center">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form and Details */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Send us a Message
                                </h3>
                                <ContactForm onSuccess={() => setIsSubmitted(true)} />
                            </div>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Company Info */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Why Choose Us?
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        
                                        '500+ Satisfied Clients',
                                        '100% Customer Satisfaction Rate',                                       
                                        '24/7 Technical Support',
                                        'Quality Assurance on All Products',
                                        'Experienced and Knowledgeable Team'
                                       
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center space-x-3"
                                        >
                                            <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Departments */}
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Departments
                                </h3>
                                <div className="space-y-6">
                                    {departments.map((dept, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="border-l-4 border-green-500 pl-4"
                                        >
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                                {dept.name}
                                            </h4>
                                            <p className="text-gray-600 mb-2">{dept.description}</p>
                                            <div className="space-y-1">
                                                <p className="text-sm text-gray-500">
                                                    <FaEnvelope className="inline mr-2" />
                                                    {dept.email}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    <FaPhone className="inline mr-2" />
                                                    {dept.phone}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Find Us
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Visit our office in Noida, Uttar Pradesh. We're conveniently located and easily accessible.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <MapComponent />
                    </motion.div>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Don't wait! Contact us today and let our experts help you find the perfect solutions for your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="tel:+919205960101"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                <FaPhone className="inline mr-2" />
                                Call Now: +91 9205960101
                            </motion.a>
                            <motion.a
                                href="mailto:info@dokaniatech.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                            >
                                <FaEnvelope className="inline mr-2" />
                                Send Email
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
