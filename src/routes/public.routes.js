import { Router } from 'express';
import { listClients, listTestimonials, createClient, updateClient, deleteClient, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/public.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/clients', listClients);
router.get('/testimonials', listTestimonials);

// Admin
router.post('/clients', authenticate, authorize('admin'), createClient);
router.put('/clients/:id', authenticate, authorize('admin'), updateClient);
router.delete('/clients/:id', authenticate, authorize('admin'), deleteClient);
router.post('/testimonials', authenticate, authorize('admin'), createTestimonial);
router.put('/testimonials/:id', authenticate, authorize('admin'), updateTestimonial);
router.delete('/testimonials/:id', authenticate, authorize('admin'), deleteTestimonial);

export default router;


