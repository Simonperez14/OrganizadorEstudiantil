import { categoryCreateBodySchema, categoryUpdateBodySchema } from "../schemas/category.schemas.js";
import { validate } from "./validate.middleware.js";

export const validateBodyCreate = validate(categoryCreateBodySchema, "body");
export const validateBodyUpdate = validate(categoryUpdateBodySchema, "body");