import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
        category: { type: String, required: true, trim: true },
        priceLabel: { type: String, default: 'Contact for Quote' },
        description: { type: String, required: true },
        longDescription: { type: String },
        features: [{ type: String }],
        specifications: { type: Map, of: String },
        images: [{ type: String }],
        applications: [{ type: String }],
        inStock: { type: Boolean, default: true }
    },
    { timestamps: true }
);

export default mongoose.model('Product', productSchema);


