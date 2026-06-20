'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel images data
    const carouselImages = [
        {
            id: 1,
            title: 'DGTW Hydrox Brazing Solutions',
            description: 'High-quality brazing solutions for industrial applications',
            image: 'http://dgtw.co.kr/eng/images/product/purpose01.jpg',
            fallbackGradient: 'from-blue-500 to-cyan-500',
            // overlay: 'rgba(59, 130, 246, 0.7)' // Blue overlay
        },
        {
            id: 2,
            title: 'EPS Machinery Parts',
            description: 'Precision-engineered spare parts for EPS machinery',
            image: 'http://dgtw.co.kr/eng/images/product/line_auto01.jpg',
            fallbackGradient: 'from-green-500 to-emerald-500',
            // overlay: 'rgba(34, 197, 94, 0.7)' // Green overlay
        },
        {
            id: 3,
            title: 'HVAC Solutions',
            description: 'Complete HVAC system components and solutions',
            image: 'http://dgtw.co.kr/eng/images/product/pipe08.jpg',
            fallbackGradient: 'from-orange-500 to-red-500',
           
        },
        {
            id: 4,
            title: 'Automobile Parts',
            description: 'Reliable automotive components and spare parts',
            image: 'https://images.pexels.com/photos/30335373/pexels-photo-30335373.jpeg',
            fallbackGradient: 'from-purple-500 to-pink-500',
            // overlay: 'rgba(168, 85, 247, 0.7)' // Purple overlay
        },
        {
            id: 5,
            title: 'Industrial Couplings',
            description: 'Heavy-duty couplings for industrial machinery',
            image: 'https://images.pexels.com/photos/15018559/pexels-photo-15018559.jpeg',
            fallbackGradient: 'from-indigo-500 to-purple-500',
           
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className="relative h-[600px] overflow-hidden">
            {/* Background Carousel */}
            <div className="absolute inset-0">
                <motion.div
                    className="flex h-[600px]"
                    animate={{ x: `-${currentSlide * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {carouselImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="w-full h-full flex-shrink-0 relative"
                        >
                            {/* Fallback Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${image.fallbackGradient}`}></div>

                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${image.image})`
                                }}
                            ></div>

                            {/* Color Overlay */}
                            <div
                                className="absolute inset-0 opacity-50"
                                style={{
                                    backgroundColor: image.overlay
                                }}
                            ></div>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                                <div className="absolute top-40 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
                            </div>


                        </div>
                    ))}
                </motion.div>

                {/* Carousel Navigation */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Main Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-">
                <div className="flex items-center min-h-[600px]">
                    {/* Left Aligned Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl space-y-8"
                    >
                    
                      
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            Dokania
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
                                Tech
                            </span>
                            Solutions
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-white/90 leading-relaxed"
                        >
                            Dokania Tech Solutions imports DGTW Hydrox Brazing Solutions and manufactures EPS machinery spare parts, serving HVAC, EPS, and automobile sectors across India with reliable, high-quality products and services.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3  cursor-pointer bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm md:text-base"
                                >
                                    Explore Products
                                </motion.button>
                            </Link>
                            <a href="mailto:info@dokaniatech.com?subject=Request%20Quote&body=Hi%20Team,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20quote%20for%20your%20products.%0D%0A%0D%0AThanks," target="_blank" rel="noopener noreferrer">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2.5 cursor-pointer border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200 backdrop-blur-sm text-sm md:text-base"
                                >
                                    Get Quote
                                </motion.button>
                            </a>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
