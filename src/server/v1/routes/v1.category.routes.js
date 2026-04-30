import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/roles.middleware.js";
import { validateBodyCreate, validateBodyUpdate } from "../middleware/category.validate.middleware.js";
import {
    createController,
    getAllController,
    getByIdController,
    updateController,
    deleteController,
} from "../controllers/category.controller.js";
import limiter from "../middleware/rateLimiter.middleware.js";

const v1CategoryRoutes = Router();

v1CategoryRoutes.use(authMiddleware);
//v1CategoryRoutes.use(limiter);
// Lectura: cualquier usuario autenticado 
v1CategoryRoutes.get("/", getAllController);
v1CategoryRoutes.get("/:id", getByIdController);

// Escritura: solo admin
v1CategoryRoutes.post("/", roleMiddleware("admin"), validateBodyCreate, createController);
v1CategoryRoutes.put("/:id", roleMiddleware("admin"), validateBodyUpdate, updateController);
v1CategoryRoutes.delete("/:id", roleMiddleware("admin"), deleteController);

export default v1CategoryRoutes;