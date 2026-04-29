import express from "express"
import dotenv from "dotenv";
import rutasGenerales from "./api/v1/routes/index.js"


import { connectMongo } from "./api/v1/config/mongo.config.js";
import { errorMiddleware } from "./api/v1/middleware/error.middleware.js";

dotenv.config();

connectMongo();



const app = express();

app.use(express.json());
app.use(rutasGenerales);

//rutas por defecto error 404 ruta no encontrada
// Middleware validacion de errores
app.use(errorMiddleware);



const puerto = process.env.PORT || 3001;
app.listen(puerto, () => console.log('Escuchando en puerto:', puerto)); 