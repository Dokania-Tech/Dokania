'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhone, FaEnvelope, FaCheck, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-green-600">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-green-600">Products</Link>
                        <span>/</span>
                        <span className="text-gray-900">{product.name}</span>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Product Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        {/* Main Image */}
                        <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Thumbnail Images */}
                        <div className="flex space-x-4">
                            {product.images.map((image, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedImage(index)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index
                                        ? 'border-green-500 shadow-lg'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Product Header */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${product.inStock
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                    }`}>
                                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                            <p className="text-xl font-semibold text-gray-900 mb-6">
                                {product.price}
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.longDescription}
                            </p>
                        </div>

                        {/* Features */}
                        {product.features && product.features.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="flex items-center space-x-3"
                                        >
                                            <FaCheck className="text-green-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Specifications */}
                        {product.specifications && Object.keys(product.specifications).length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="flex justify-between">
                                                <dt className="font-medium text-gray-700">{key}:</dt>
                                                <dd className="text-gray-600">{value}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        )}

                        {/* Applications */}
                        {product.applications && product.applications.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((application, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                        >
                                            {application}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity and Actions */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700">Quantity:</label>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => handleQuantityChange(-1)}
                                        className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange(1)}
                                        className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://api.whatsapp.com/send?phone=9873776859" target="_blank" rel="noopener noreferrer" className='flex w-1/2 items-center justify-center'>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 border-2 border-[#E06B80] text-[#E06B80] rounded-lg font-semibold hover:bg-[#E06B80] cursor-pointer hover:text-white transition-all duration-200"
                                    >
                                        <FaPhone />
                                        <span>Contact Sales</span>
                                    </motion.button>
                                </a>
                            </div>
                            {/* Removed Add to Wishlist and Share buttons */}
                        </div>
                    </motion.div>
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16  bg-gray-900  rounded-2xl p-8 text-white text-center"
                >
                    <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        Our team of experts is ready to help you find the perfect solution for your needs. Contact us today for personalized assistance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://api.whatsapp.com/send?phone=9873776859" target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 cursor-pointer bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                            >
                                <FaPhone className="inline mr-2" />
                                Call Us: +91 9205960101
                            </motion.button>
                        </a>
                        <a href="mailto:info@dokaniatech.com?subject=Request%20Quote&body=Hi%20Team,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20quote%20for%20your%20products.%0D%0A%0D%0AThanks," target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3.5 border-2 cursor-pointer border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
                            >
                                <FaEnvelope className="inline mr-2" />
                                Email Us
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductDetail;
