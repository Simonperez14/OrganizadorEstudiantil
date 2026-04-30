import Joi from "joi";

export const bookQuerySchema = Joi.object({
    query: Joi.string().min(2).max(100).required(),
    limit: Joi.number().integer().min(1).max(20).default(5),
});