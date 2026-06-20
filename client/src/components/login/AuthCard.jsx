'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const emailRegex = /^(?:[a-zA-Z0-9_'^&\-]+(?:\.[a-zA-Z0-9_'^&\-]+)*)@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)]\))$/;

const fieldBase = 'block w-full rounded-lg border bg-white/90 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors';

const AuthCard = () => {
    const { login: loginAction, register: registerAction } = useAuth();
    const router = useRouter();
    const [mode, setMode] = useState('login'); // 'login' | 'register'
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = () => {
        const nextErrors = {};
        if (mode === 'register' && !form.name.trim()) {
            nextErrors.name = 'Name is required';
        }
        if (!form.email.trim()) {
            nextErrors.email = 'Email is required';
        } else if (!emailRegex.test(form.email.trim())) {
            nextErrors.email = 'Enter a valid email address';
        }
        if (!form.password) {
            nextErrors.password = 'Password is required';
        } else if (form.password.length < 6) {
            nextErrors.password = 'Password must be at least 6 characters';
        }
        if (mode === 'register') {
            if (!form.confirmPassword) {
                nextErrors.confirmPassword = 'Please confirm your password';
            } else if (form.confirmPassword !== form.password) {
                nextErrors.confirmPassword = 'Passwords do not match';
            }
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        try {
            if (mode === 'login') {
                await loginAction(form.email, form.password);
            } else {
                await registerAction(form.name, form.email, form.password);
            }
            router.push('/');
        } catch (err) {
            alert(err.message || 'Authentication failed');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 md:p-8">
                    <div className="flex items-center justify-center gap-2 mb-6" role="tablist" aria-label="Authentication mode">
                        <button
                            role="tab"
                            aria-selected={mode === 'login'}
                            onClick={() => setMode('login')}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${mode === 'login' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Login
                        </button>
                        <button
                            role="tab"
                            aria-selected={mode === 'register'}
                            onClick={() => setMode('register')}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${mode === 'register' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            Register
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.form
                            key={mode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            onSubmit={onSubmit}
                            noValidate
                        >
                            {mode === 'register' && (
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        className={`${fieldBase} px-3 py-2 ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                                        placeholder="Jane Doe"
                                        value={form.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>}
                                </div>
                            )}

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className={`${fieldBase} px-3 py-2 ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    {mode === 'login' && (
                                        <a href="#" className="text-sm text-green-700 hover:text-green-800">Forgot?</a>
                                    )}
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                                    className={`${fieldBase} px-3 py-2 ${errors.password ? 'border-red-300' : 'border-gray-200'}`}
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <p className="mt-1 text-sm text-red-600" role="alert">{errors.password}</p>}
                            </div>

                            {mode === 'register' && (
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="new-password"
                                        className={`${fieldBase} px-3 py-2 ${errors.confirmPassword ? 'border-red-300' : 'border-gray-200'}`}
                                        placeholder="••••••••"
                                        value={form.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <p className="mt-1 text-sm text-red-600" role="alert">{errors.confirmPassword}</p>}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white transition-colors ${submitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
                            >
                                {submitting ? 'Please wait…' : mode === 'login' ? 'Login' : 'Create account'}
                            </button>

                            <p className="mt-4 text-center text-sm text-gray-600">
                                {mode === 'login' ? (
                                    <>
                                        Don't have an account?{' '}
                                        <button type="button" className="text-green-700 hover:text-green-800 font-semibold" onClick={() => setMode('register')}>Register</button>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{' '}
                                        <button type="button" className="text-green-700 hover:text-green-800 font-semibold" onClick={() => setMode('login')}>Login</button>
                                    </>
                                )}
                            </p>
                        </motion.form>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default AuthCard;


