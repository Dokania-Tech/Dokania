import Client from '../models/Client.model.js';
import Testimonial from '../models/Testimonial.model.js';
import { asyncHandler } from '../utils/index.js';

export const listClients = asyncHandler(async (req, res) => {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json({ success: true, count: clients.length, clients });
});

export const listTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json({ success: true, count: testimonials.length, testimonials });
});

// Admin CRUD
export const createClient = asyncHandler(async (req, res) => {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, client });
});

export const updateClient = asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!client) return res.status(404).json({ success: false, message: 'Client not found' });
    res.json({ success: true, client });
});

export const deleteClient = asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) return res.status(404).json({ success: false, message: 'Client not found' });
    res.json({ success: true });
});

export const createTestimonial = asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ success: true, testimonial });
});

export const updateTestimonial = asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!testimonial) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true, testimonial });
});

export const deleteTestimonial = asyncHandler(async (req, res) => {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    if (!testimonial) return res.status(404).json({ success: false, message: 'Testimonial not found' });
    res.json({ success: true });
});


