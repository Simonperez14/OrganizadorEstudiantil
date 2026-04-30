import { bookQuerySchema } from "../schemas/books.schemas.js";
import { validate } from "./validate.middleware.js";

export const validateBookQuery = validate(bookQuerySchema, "query");