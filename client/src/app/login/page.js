import React from 'react';
import AuthCard from '@/components/login/AuthCard';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Welcome back
                        </h1>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                            Sign in to continue or create a new account to get started.
                        </p>
                    </div>
                    <AuthCard />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


