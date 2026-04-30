import Joi from "joi";

export const iaDescriptionBodySchema = Joi.object({
    subjectName: Joi.string().min(2).max(100).required(),
    style: Joi.string().valid("motivacional", "tecnico", "resumido").required(),
});