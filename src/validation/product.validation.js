import Joi from 'joi';

export const createProductSchema = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    category: Joi.string().required(),
    priceLabel: Joi.string().optional(),
    description: Joi.string().required(),
    longDescription: Joi.string().allow(''),
    features: Joi.array().items(Joi.string()).default([]),
    specifications: Joi.object().pattern(/.*/, Joi.string()).default({}),
    images: Joi.array().items(Joi.string().uri()).default([]),
    applications: Joi.array().items(Joi.string()).default([]),
    inStock: Joi.boolean().default(true)
});

// For updates, avoid defaults so partial updates don't overwrite fields
export const updateProductSchema = Joi.object({
    name: Joi.string(),
    slug: Joi.string(),
    category: Joi.string(),
    priceLabel: Joi.string(),
    description: Joi.string(),
    longDescription: Joi.string().allow(''),
    features: Joi.array().items(Joi.string()),
    specifications: Joi.object().pattern(/.*/, Joi.string()),
    images: Joi.array().items(Joi.string().uri()),
    applications: Joi.array().items(Joi.string()),
    inStock: Joi.boolean()
});


