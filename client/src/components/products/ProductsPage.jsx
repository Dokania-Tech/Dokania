'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaCog, FaWrench, FaThermometerHalf, FaCar, FaIndustry, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const [total, setTotal] = useState(0);

    const ITEMS_PER_PAGE = 9;
    const { list } = require('@/apis/api').productApi;

    // Debounce search — avoids an API call on every keystroke
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(searchTerm), 400);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch from backend whenever page or any filter changes
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError('');
            try {
                const params = { page: currentPage, limit: ITEMS_PER_PAGE };
                if (debouncedSearch) params.q = debouncedSearch;
                if (selectedCategory !== 'all') params.category = selectedCategory;
                params.sortBy = sortBy;
                const data = await list(params);
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
                setTotalPages(data.pagination.pages || 1);
                setTotal(data.pagination.total || 0);
            } catch (err) {
                setError(err.message || 'Failed to load products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [currentPage, debouncedSearch, selectedCategory, sortBy]);

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
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:border-transparent"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="category">Sort by Category</option>
                        </select>

                        {/* Stock Filter */}
                        
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
                            Showing {products.length} of {total} products
                            {totalPages > 1 && <span className="ml-2 text-gray-400">(Page {currentPage} of {totalPages})</span>}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedCategory}-${debouncedSearch}-${sortBy}-${currentPage}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {products.map((product, index) => (
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

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-2 mt-10 flex-wrap">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                ← Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1)
                                .reduce((acc, page, idx, arr) => {
                                    if (idx > 0 && page - arr[idx - 1] > 1) acc.push('ellipsis-' + page);
                                    acc.push(page);
                                    return acc;
                                }, [])
                                .map((item) =>
                                    String(item).startsWith('ellipsis') ? (
                                        <span key={item} className="px-2 text-gray-400 select-none">…</span>
                                    ) : (
                                        <button
                                            key={item}
                                            onClick={() => setCurrentPage(item)}
                                            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                                                currentPage === item
                                                    ? 'bg-[#7a0021] text-white shadow'
                                                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {item}
                                        </button>
                                    )
                                )}
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                            >
                                Next →
                            </button>
                        </div>
                    )}

                    {/* No Results */}
                    {!loading && products.length === 0 && (
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
