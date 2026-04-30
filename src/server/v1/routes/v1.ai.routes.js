import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateBodyIA } from "../middleware/ia.validate.middleware.js";
import { generateDescriptionController } from "../controllers/ia.controller.js";
import limiter from "../middleware/rateLimiter.middleware.js";


const v1AiRoutes = Router();

v1AiRoutes.use(authMiddleware);

v1AiRoutes.use(limiter)

v1AiRoutes.post("/generateDescription", validateBodyIA, generateDescriptionController);

export default v1AiRoutes;