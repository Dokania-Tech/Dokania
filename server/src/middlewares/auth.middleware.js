import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import { ApiError, asyncHandler } from '../utils/index.js';

export const authenticate = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) throw new ApiError(401, 'Authentication required');
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.sub).select('+password');
    if (!user) throw new ApiError(401, 'Invalid token');
    req.user = { id: user._id.toString(), role: user.role, name: user.name, email: user.email };
    next();
});

export function authorize(...roles) {
    return (req, res, next) => {
        if (!req.user) return next(new ApiError(401, 'Authentication required'));
        if (!roles.includes(req.user.role)) return next(new ApiError(403, 'Forbidden'));
        next();
    };
}


