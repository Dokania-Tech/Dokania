'use client';

import Link from 'next/link';
import RequireAdmin from '@/components/auth/RequireAdmin';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const nav = [
        { href: '/admin/products', label: 'Products' },
        { href: '/admin/clients', label: 'Clients' },
        { href: '/admin/contacts', label: 'Contact Messages' },
    ];
    return (
        <RequireAdmin>
            <div className="min-h-screen bg-gray-50 flex">
                <aside className="w-64 bg-white border-r shadow-sm">
                    <div className="p-4 font-bold text-lg border-b">Admin</div>
                    <nav className="space-y-1 p-3">
                        {nav.map((n) => (
                            <Link
                                key={n.href}
                                href={n.href}
                                className={`block px-3 py-2 rounded-md transition-colors ${pathname.startsWith(n.href) ? 'bg-green-50 text-green-800 font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}>
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col">
                    <header className="flex items-center justify-between p-4 border-b bg-white">
                        <div className="text-sm text-gray-600">Dashboard</div>
                        <div className="flex items-center gap-3">
                            <div className="text-sm text-gray-700">Admin</div>
                        </div>
                    </header>

                    <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-5">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </RequireAdmin>
    );
}


