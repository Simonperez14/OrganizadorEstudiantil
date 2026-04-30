import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/roles.middleware.js";
import {
    validateBodyCreate,
    validateBodyUpdate,
    validateQuery,
} from "../middleware/subject.validate.middleware.js";
import {
    createController,
    getAllController,
    getByIdController,
    updateController,
    deleteController,
} from "../controllers/subject.controller.js";
import limiter from "../middleware/rateLimiter.middleware.js";

const v1SubjectRoutes = Router();

// todas las rutas requieren token
v1SubjectRoutes.use(authMiddleware);
//v1SubjectRoutes.use(roleMiddleware("estudiante"));
//v1SubjectRoutes.use(limiter);
v1SubjectRoutes.post("/", validateBodyCreate, createController);
v1SubjectRoutes.get("/", getAllController);
v1SubjectRoutes.get("/:id", getByIdController);
v1SubjectRoutes.put("/:id", validateBodyUpdate, updateController);
v1SubjectRoutes.delete("/:id", deleteController);

export default v1SubjectRoutes;