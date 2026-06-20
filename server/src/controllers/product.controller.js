import Product from '../models/Product.model.js';
import { asyncHandler } from '../utils/index.js';

export const listProducts = asyncHandler(async (req, res) => {
    const { q, category, sortBy, page = 1, limit = 12 } = req.query;
    const filter = {};
    if (q) {
        filter.$or = [
            { name: { $regex: q, $options: 'i' } },
            { description: { $regex: q, $options: 'i' } }
        ];
    }
    if (category && category !== 'all') filter.category = category;
    const sort = {};
    if (sortBy === 'name') sort.name = 1;
    if (sortBy === 'category') sort.category = 1;
    const pageNum = Math.max(parseInt(page, 10) || 1, 1);
    const pageSize = Math.min(Math.max(parseInt(limit, 10) || 12, 1), 100);
    const [items, total] = await Promise.all([
        Product.find(filter).sort(sort).skip((pageNum - 1) * pageSize).limit(pageSize),
        Product.countDocuments(filter)
    ]);
    res.json({ success: true, products: items, pagination: { total, page: pageNum, limit: pageSize, pages: Math.ceil(total / pageSize) } });
});

export const getProduct = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const product = await Product.findOne({ slug });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
});

export const createProduct = asyncHandler(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, product });
});

export const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, product });
});

export const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true });
});


