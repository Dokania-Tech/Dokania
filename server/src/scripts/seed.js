import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { connectToDatabase } from '../config/db.js';
import User from '../models/User.model.js';
import Product from '../models/Product.model.js';

async function run() {
    await connectToDatabase();

    // Admin user
    const adminEmail = 'admin@dokania.local';
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
        await User.create({ name: 'Admin', email: adminEmail, password: 'admin123', role: 'admin' });
        // eslint-disable-next-line no-console
        console.log('Created admin user: admin@dokania.local / admin123');
    }

    // Seed products (if none)
    const count = await Product.countDocuments();
    if (count === 0) {
        const demoProducts = [
            {
                name: 'DGTW Hydrox Brazing Solutions',
                slug: 'dgtw-hydrox-brazing-solutions',
                category: 'brazing',
                priceLabel: 'Contact for Quote',
                description: 'High-quality brazing solutions for industrial applications with superior quality and reliability.',
                longDescription: 'Engineered for industrial brazing applications with exceptional strength and durability.',
                features: ['High Temperature Resistance', 'Corrosion Resistant', 'Industrial Grade'],
                specifications: { 'Operating Temperature': 'Up to 1000°C' },
                images: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'],
                applications: ['Aerospace', 'Automotive', 'HVAC']
            },
            {
                name: 'EPS Machinery Spare Parts',
                slug: 'eps-machinery-spare-parts',
                category: 'eps',
                priceLabel: 'Contact for Quote',
                description: 'Precision-engineered spare parts for EPS machinery ensuring optimal performance.',
                longDescription: 'Manufactured with precision engineering to ensure optimal performance and longevity.',
                features: ['Precision Engineering', 'Durable Materials', 'Easy Installation'],
                specifications: { Tolerance: '±0.01mm' },
                images: ['https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?auto=format&fit=crop&w=800&q=80'],
                applications: ['EPS Manufacturing', 'Packaging Industry']
            }
        ];
        await Product.insertMany(demoProducts);
        // eslint-disable-next-line no-console
        console.log('Seeded demo products');
    }

    await mongoose.connection.close();
}

run().catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
});


