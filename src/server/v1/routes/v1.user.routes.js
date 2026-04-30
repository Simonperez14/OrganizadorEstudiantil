import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/roles.middleware.js";
import { getAllController } from "../controllers/user.controller.js";
import { upgradePlanController } from "../controllers/user.controller.js";
import limiter from "../middleware/rateLimiter.middleware.js";

const v1UserRoutes = Router();


//aca valido que la persona este con token valido con las credenciales necesarias
v1UserRoutes.use(authMiddleware);
v1UserRoutes.use(limiter);

v1UserRoutes.get("/", roleMiddleware("admin"), getAllController);
//v1UserRoutes.patch("/upgrade-plan", roleMiddleware("estudiante"), upgradePlanController);
v1UserRoutes.patch("/upgrade-plan",  upgradePlanController);

export default v1UserRoutes;


