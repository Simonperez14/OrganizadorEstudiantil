import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateBookQuery } from "../middleware/books.validate.middleware.js";
import { searchBooksController } from "../controllers/books.controller.js";

const v1BooksRoutes = Router();

v1BooksRoutes.use(authMiddleware);

v1BooksRoutes.get("/", validateBookQuery, searchBooksController);

export default v1BooksRoutes;