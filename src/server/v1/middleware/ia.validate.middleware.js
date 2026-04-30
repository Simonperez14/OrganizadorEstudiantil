import { iaDescriptionBodySchema } from "../schemas/ia.schemas.js";
import { validate } from "./validate.middleware.js";

export const validateBodyIA = validate(iaDescriptionBodySchema, "body");