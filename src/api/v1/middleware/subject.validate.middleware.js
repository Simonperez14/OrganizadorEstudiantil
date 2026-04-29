import {
    subjectCreateBodySchema,
    subjectUpdateBodySchema,
    subjectQuerySchema,
} from "../schemas/subject.schemas.js";
import { validate } from "./validate.middleware.js";

export const validateBodyCreate = validate(subjectCreateBodySchema, "body");
export const validateBodyUpdate = validate(subjectUpdateBodySchema, "body");
export const validateQuery = validate(subjectQuerySchema, "query");