import Joi from 'joi';

export const submitContactSchema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().allow('', null),
    subject: Joi.string().min(2).required(),
    message: Joi.string().min(5).required(),
    source: Joi.string().valid('contact', 'quote').default('contact')
});


