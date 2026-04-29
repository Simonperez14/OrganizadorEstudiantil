import Joi from "joi";

export const subjectCreateBodySchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().max(500).optional().allow(""),
    color: Joi.string().optional(),
    hoursPerWeek: Joi.number().integer().min(1).max(40).required(),
    status: Joi.string().valid("activa", "pausada", "completada").optional(),
    categoryId: Joi.string().optional().allow(null, ""),
});

export const subjectUpdateBodySchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    description: Joi.string().max(500).optional().allow(""),
    color: Joi.string().optional(),
    hoursPerWeek: Joi.number().integer().min(1).max(40).optional(),
    status: Joi.string().valid("activa", "pausada", "completada").optional(),
    categoryId: Joi.string().optional().allow(null, ""),
}).min(1); // al menos un campo para poder actualizar

export const subjectQuerySchema = Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(50).default(10),
    status: Joi.string().valid("activa", "pausada", "completada").optional(),
    name: Joi.string().optional(),
    categoryId: Joi.string().optional(),
});