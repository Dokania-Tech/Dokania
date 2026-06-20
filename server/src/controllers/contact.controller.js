import ContactMessage from '../models/ContactMessage.model.js';
import { asyncHandler } from '../utils/index.js';

export const submitMessage = asyncHandler(async (req, res) => {
    const message = await ContactMessage.create(req.body);
    res.status(201).json({ success: true, message });
});

export const listMessages = asyncHandler(async (req, res) => {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
});


