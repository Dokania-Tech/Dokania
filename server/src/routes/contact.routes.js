import { Router } from 'express';
import { submitMessage, listMessages } from '../controllers/contact.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { submitContactSchema } from '../validation/contact.validation.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/', validate(submitContactSchema), submitMessage);
router.get('/', authenticate, authorize('admin'), listMessages);

export default router;


