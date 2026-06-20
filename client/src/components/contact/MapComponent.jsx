'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaDirections, FaPhone, FaEnvelope } from 'react-icons/fa';

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    // Company location coordinates (Noida, Sector 10)
    const companyLocation = {
        lat: 28.5897,
        lng: 77.3312,
        address: 'C - 229 SECTOR 10, NOIDA, UTTAR PRADESH - 201301',
        phone: '+91 9205960101',
        email: 'info@dokaniatech.com'
    };

    useEffect(() => {
        // Simulate map loading
        const timer = setTimeout(() => {
            setMapLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative h-96 bg-gray-100">
            {/* Map Placeholder/Embed */}
            <div className="w-full h-full relative">
                {!mapLoaded ? (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center"
                        >
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading map...</p>
                        </motion.div>
                    </div>
                ) : (
                    <>
                        {/* Google Maps Embed */}
                        <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123456789!2d${companyLocation.lng}!3d${companyLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzA3LjgiTiA3N8KwMjMnMjcuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        />

                        {/* Map Overlay with Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="text-white text-lg" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 mb-2">
                                        Dokania Tech Solutions
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {companyLocation.address}
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <FaPhone className="mr-2" />
                                            {companyLocation.phone}
                                        </p>
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <FaEnvelope className="mr-2" />
                                            {companyLocation.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Directions Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="absolute bottom-4 right-4"
                        >
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${companyLocation.lat},${companyLocation.lng}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
                            >
                                <FaDirections />
                                <span>Get Directions</span>
                            </a>
                        </motion.div>
                    </>
                )}
            </div>

            {/* Alternative: Static Map with Location Marker */}
            {!mapLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMapMarkerAlt className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Our Location
                        </h3>
                        <p className="text-gray-600 mb-4">
                            {companyLocation.address}
                        </p>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500 flex items-center justify-center">
                                <FaPhone className="mr-2" />
                                {companyLocation.phone}
                            </p>
                            <p className="text-sm text-gray-500 flex items-center justify-center">
                                <FaEnvelope className="mr-2" />
                                {companyLocation.email}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default MapComponent;
