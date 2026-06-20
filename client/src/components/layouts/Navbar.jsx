'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { user, isAuthenticated, logout } = useAuth();
    const router = useRouter();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/home' },
        { name: 'Products', href: '/products' },
        { name: 'Clients', href: '/clients' },
        { name: 'About', href: '/about' },
        { name: 'Contact Us', href: '/contact' }
    ];

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Image
                        src='/images/logo1.png'
                        alt='Logo'
                        width={80}
                        height={80}
                        className="flex items-center space-x-3"
                    />

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <motion.a
                                    href={item.href}
                                    whileHover={{ y: -2 }}
                                    className="flex items-center space-x-1 text-[#001524] hover:text-red-600 transition-colors duration-200 font-bold"
                                    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span>{item.name}</span>
                                    {item.dropdown && (
                                        <motion.div
                                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <FaChevronDown size={12} />
                                        </motion.div>
                                    )}
                                </motion.a>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {item.dropdown && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <motion.a
                                                    key={dropdownIndex}
                                                    href={dropdownItem.href}
                                                    whileHover={{ x: 5, backgroundColor: '#f0fdf4' }}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 transition-all duration-200"
                                                >
                                                    {dropdownItem.name}
                                                </motion.a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Contact Info & CTA */}
                    <div className="hidden lg:flex items-center space-x-4 ">
                        <a href="https://api.whatsapp.com/send?phone=8130100529" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center space-x-1 bg-[#CD2C58] text-sm text-white px-4 py-2.5 rounded-lg cursor-pointer"
                            >
                                <FaWhatsapp size={17} className="text-white " />
                                <span> +91 8130100529</span>
                            </motion.div>
                        </a>
                        {isAuthenticated ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-[#CD2C58]">Hi, {user?.name || 'User'}</span>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border px-4 py-2 text-white  cursor-pointer bg-[#CD2C58] rounded-lg transition-colors duration-200 font-medium"
                                    onClick={() => { logout(); router.push('/'); }}
                                >
                                    Logout
                                </motion.button>
                            </div>
                        ) : (
                            <Link href="/login">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                                        style={{ backgroundColor: "#CD2C58" }}

                                    >
                                        Login / Register
                                    </motion.button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMobileMenu}
                        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {navItems.map((item, index) => (
                                    <div key={index}>
                                        <motion.a
                                            href={item.href}
                                            whileHover={{ x: 5 }}
                                            onClick={closeMobileMenu}
                                            className="block py-2 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                                        >
                                            {item.name}
                                        </motion.a>

                                        {/* Mobile Dropdown */}
                                        {item.dropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="ml-4 space-y-2 mt-2"
                                            >
                                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                    <motion.a
                                                        key={dropdownIndex}
                                                        href={dropdownItem.href}
                                                        whileHover={{ x: 5 }}
                                                        onClick={closeMobileMenu}
                                                        className="block py-1 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                                                    >
                                                        {dropdownItem.name}
                                                    </motion.a>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile Contact Info */}
                                <div className="pt-4 border-t border-gray-200 space-y-3">
                                    <a href="https://api.whatsapp.com/send?phone=9873776859" target="_blank" rel="noopener noreferrer">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="flex items-center space-x-1 text-gray-600"
                                        >
                                            <FaWhatsapp size={17} className="text-green-600" />
                                            <span>+91 9873776859</span>
                                        </motion.div>
                                    </a>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center space-x-2 text-gray-600"
                                    >
                                        <FaEnvelope className="text-green-600" />
                                        <span>info@dokaniatech.com</span>
                                    </motion.div>
                                    {isAuthenticated ? (
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => { closeMobileMenu(); logout(); router.push('/'); }}
                                            className="w-full border text-gray-700 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
                                        >
                                            Logout ({user?.name || 'User'})
                                        </motion.button>
                                    ) : (
                                        <Link href="/login" className='cursor-pointer'>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={closeMobileMenu}
                                                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                                            >
                                                Login / Register
                                            </motion.button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
