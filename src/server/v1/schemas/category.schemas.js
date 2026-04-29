import Joi from "joi";

export const categoryCreateBodySchema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().max(300).optional().allow(""),
});

export const categoryUpdateBodySchema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    description: Joi.string().max(300).optional().allow(""),
}).min(1);