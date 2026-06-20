'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaWrench, FaThermometerHalf, FaCar, FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const ProductsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch products dynamically (same mapping as Products page)
    useEffect(() => {
        const { list } = require('@/apis/api').productApi;
        const fetchProducts = async () => {
            try {
                const data = await list();
                const mapped = data.products.map((p) => ({
                    id: p._id,
                    name: p.name,
                    category: p.category,
                    slug: p.slug,
                    price: p.priceLabel || 'Contact for Quote',
                    description: p.description,
                    image: p.images?.[0] || '/images/placeholder.html',
                    features: p.features || [],
                    inStock: p.inStock,
                }));
                setProducts(mapped);
            } catch (err) {
                setError(err.message || 'Failed to load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // products are fetched dynamically above

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="py-20 bg-white">
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
                        Our <span className="text-transparent bg-clip-text bg-[#E06B80]">Products</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our comprehensive range of high-quality products designed to meet the diverse needs of industries across India.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProducts.slice(0, 3).map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Product Image */}
                                <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image || '/images/placeholder.html'}
                                        alt={product.name}
                                        onError={(e) => { e.currentTarget.src = '/images/placeholder.html'; }}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                                            {product?.category}
                                        </span>
                                    </div>

                                    {/* <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div> */}
                                </div>

                                {/* Product Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link href="/products">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full flex items-center cursor-pointer justify-center space-x-2 py-3 bg-black text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                                        >
                                            <span>Learn More</span>
                                            <FaArrowRight size={14} />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Products CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link href="/products">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-black text-black rounded-lg font-semibold hover:bg-[#CD2C58] hover:border-[#CD2C58] cursor-pointer hover:text-white transition-all duration-500"
                        >
                            View All Products
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
