import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Logo and Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col items-start space-y-4">
                            {/* Logo */}
                            <Image
                                src='/images/logo1.png'
                                alt='Logo'
                                width={250}
                                height={250}
                                className="flex items-center space-x-3"
                            />
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-green-700 mb-4">Company</h3>
                        <nav className="space-y-3">
                            {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                                <a
                                    key={index}
                                    href={`/${item.toLowerCase()}`}
                                    className={`block text-gray-700 hover:text-green-600 transition-colors duration-200 ${item === 'About' ? 'text-green-600 font-medium' : ''
                                        }`}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* About Us */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-green-700 mb-4">About Us</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Dokania Tech Solutions imports DGTW Hydrox Brazing Solutions and manufactures EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India with reliable, high-quality products and services.
                        </p>
                    </div>

                    {/* Address & Contact */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold text-green-700 mb-4">Address</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-2">
                                <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-sm">
                                    C229 SECTOR 10, NOIDA<br />
                                    UTTAR PRADESH - 201301
                                </p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-green-600" />
                                <a
                                    href="tel:+919205960101"
                                    className="text-gray-700 text-sm hover:text-green-600 transition-colors duration-200"
                                >
                                    Call Us: +91 9205553476
                                </a>
                            </div>

                            {/* Social Media Icons */}
                            <div className="flex space-x-3 pt-2">
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={14} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={14} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={14} />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-sm text-gray-600">
                        Copyright © 2025 Dokania Tech Solutions. | Website Designed & Developed by Santosh Kumar
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
