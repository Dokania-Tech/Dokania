import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import { ApiError, asyncHandler } from '../utils/index.js';

function createToken(user) {
    const payload = { sub: user._id.toString(), role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    return token;
}

export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) throw new ApiError(409, 'Email already in use');
    const user = await User.create({ name, email, password });
    const token = createToken(user);
    res.status(201).json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) throw new ApiError(401, 'Invalid credentials');
    const match = await user.comparePassword(password);
    if (!match) throw new ApiError(401, 'Invalid credentials');
    const token = createToken(user);
    res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});

export const me = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json({ success: true, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
});


