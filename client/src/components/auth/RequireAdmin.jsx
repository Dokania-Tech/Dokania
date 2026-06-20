'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const RequireAdmin = ({ children }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;
        if (!isAuthenticated) {
            router.replace('/login');
            return;
        }
        if (user?.role !== 'admin') {
            router.replace('/403');
        }
    }, [loading, isAuthenticated, user, router]);

    if (loading) return <div className="text-center py-12">Loading…</div>;
    if (!isAuthenticated || user?.role !== 'admin') return null;

    return <>{children}</>;
};

export default RequireAdmin;


