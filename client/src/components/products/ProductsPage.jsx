'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaCog, FaWrench, FaThermometerHalf, FaCar, FaIndustry, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [stockFilter, setStockFilter] = useState('all'); // all | in | out

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { list } = require('@/apis/api').productApi;

    useEffect(() => {
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

    // Filter and sort products
    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesStock = stockFilter === 'all' ? true : stockFilter === 'in' ? product.inStock : !product.inStock;
            return matchesSearch && matchesCategory && matchesStock;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'category':
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-white py-20 border-b-[0.5px] border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-black"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-[#CD2C58] bg-clip-text text-transparent">
                            Our Products
                        </h1>
                        <p className="text-xl md:text-2xl text-[#3d000b] max-w-3xl mx-auto">
                            Discover our comprehensive range of high-quality products designed to meet the diverse needs of industries across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-white ">
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        

 

                        {/* Search Bar */}
                        <div className="relative flex-1 min-w-[250px]">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="category">Sort by Category</option>
                        </select>

                        {/* Stock Filter */}
                        <select
                            value={stockFilter}
                            onChange={(e) => setStockFilter(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent"
                        >
                            <option value="all">All Stock</option>
                            <option value="in">In Stock</option>
                            <option value="out">Out of Stock</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading && (
                        <div className="text-center py-12">Loading products…</div>
                    )}
                    {error && (
                        <div className="text-center py-12 text-red-600">{error}</div>
                    )}
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing {filteredProducts.length} of {products.length} products
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedCategory}-${searchTerm}-${sortBy}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-50 bg-gray-200">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {product?.category}
                                            </span>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 text-white text-xs font-medium rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}>
                                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>
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
                                                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-gray-700">
                                                {product.price}
                                            </span>
                                            <Link href={`/products/${product.slug}`}>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center cursor-pointer space-x-2 px-4 py-2 bg-[#7a0021] text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                                                >
                                                    <span>View Details</span>
                                                    <FaArrowRight size={14} />
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* No Results */}
                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="text-gray-400 text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        We offer custom solutions and can help you find the right products for your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 cursor-pointer border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                        <a href="mailto:info@dokaniatech.com?subject=Request%20Quote&body=Hi%20Team,%0D%0A%0D%0AI%20would%20like%20to%20request%20a%20quote%20for%20your%20products.%0D%0A%0D%0AThanks," target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 cursor-pointer border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                            >
                                Request Quote
                            </motion.button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
