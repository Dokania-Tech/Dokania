'use client';

import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';

export const api = axios.create({
    baseURL,
});

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res,
    (error) => {
        const message = error?.response?.data?.message || error.message || 'Request failed';
        return Promise.reject(new Error(message));
    }
);

// Auth
export const authApi = {
    register: (payload) => api.post('/auth/register', payload).then(r => r.data),
    login: (payload) => api.post('/auth/login', payload).then(r => r.data),
    me: () => api.get('/auth/me').then(r => r.data),
};

// Products
export const productApi = {
    list: (params) => api.get('/products', { params }).then(r => r.data),
    bySlug: (slug) => api.get(`/products/${slug}`).then(r => r.data),
    create: (payload) => api.post('/products', payload).then(r => r.data),
    update: (id, payload) => api.put(`/products/${id}`, payload).then(r => r.data),
    remove: (id) => api.delete(`/products/${id}`).then(r => r.data),
};

// Contact
export const contactApi = {
    send: (payload) => api.post('/contact', payload).then(r => r.data),
};

// Public
export const publicApi = {
    clients: () => api.get('/public/clients').then(r => r.data),
    testimonials: () => api.get('/public/testimonials').then(r => r.data),
    createClient: (payload) => api.post('/public/clients', payload).then(r => r.data),
    updateClient: (id, payload) => api.put(`/public/clients/${id}`, payload).then(r => r.data),
    deleteClient: (id) => api.delete(`/public/clients/${id}`).then(r => r.data),
    createTestimonial: (payload) => api.post('/public/testimonials', payload).then(r => r.data),
    updateTestimonial: (id, payload) => api.put(`/public/testimonials/${id}`, payload).then(r => r.data),
    deleteTestimonial: (id) => api.delete(`/public/testimonials/${id}`).then(r => r.data),
};

// Uploads
export const uploadApi = {
    productImage: (file, base) => {
        const form = new FormData();
        form.append('image', file);
        if (base) form.append('base', base);
        return api.post('/upload/product', form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(r => r.data);
    },
    clientImage: (file, base) => {
        const form = new FormData();
        form.append('image', file);
        if (base) form.append('base', base);
        return api.post('/upload/client', form, { headers: { 'Content-Type': 'multipart/form-data' } }).then(r => r.data);
    },
};


