import { Router } from 'express';
import multer from 'multer';
import crypto from 'crypto';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';
import { asyncHandler } from '../utils/index.js';
import { uploadImageToCloudinary } from '../services/upload.service.js';

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp'];
        if (!allowed.includes(file.mimetype)) {
            return cb(new Error('Only JPG, PNG, and WEBP files are allowed'));
        }
        cb(null, true);
    },
});

function randomName() {
    return crypto.randomBytes(8).toString('hex');
}

router.post(
    '/product',
    authenticate,
    authorize('admin'),
    upload.single('image'),
    asyncHandler(async (req, res) => {
        if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
        const base = req.body.base || randomName();
        const result = await uploadImageToCloudinary(req.file.buffer, 'dokania/products', base);
        res.status(201).json({ success: true, ...result });
    })
);

router.post(
    '/client',
    authenticate,
    authorize('admin'),
    upload.single('image'),
    asyncHandler(async (req, res) => {
        if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
        const base = req.body.base || randomName();
        const result = await uploadImageToCloudinary(req.file.buffer, 'dokania/clients', base);
        res.status(201).json({ success: true, ...result });
    })
);

export default router;


