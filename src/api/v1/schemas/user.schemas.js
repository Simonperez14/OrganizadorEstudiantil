import Joi from "joi";

export const userCreateBodySchema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(20).required(),
    role: Joi.string().valid("estudiante", "admin").required().default("estudiante"),
});

export const userLoginBodySchema = Joi.object({
    emailOUsername: Joi.string().required(),
    password: Joi.string().min(3).max(20).required()
});
