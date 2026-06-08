import { Router } from "express";
import v1UserRoutes from "./v1.user.routes.js";
import v1AuthRoutes from "./v1.auth.routes.js";
import v1SubjectRoutes from "./v1.subject.routes.js";
import v1CategoryRoutes from "./v1.category.routes.js";
import v1AiRoutes from "./v1.ai.routes.js";
import v1BooksRoutes from "./v1.books.routes.js";
import v1CloudinaryRoutes from "./v1.cloudinary.routes.js";

const v1Routes = Router();


v1Routes.use("/auth", v1AuthRoutes);
v1Routes.use("/users", v1UserRoutes);
v1Routes.use("/subjects", v1SubjectRoutes);
v1Routes.use("/categories", v1CategoryRoutes);
v1Routes.use("/ai", v1AiRoutes);
v1Routes.use("/books", v1BooksRoutes);

v1Routes.use("/cloudinary", v1CloudinaryRoutes);

export default v1Routes;