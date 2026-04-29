import express from "express"
import rutasGenerales from "./server/v1/routes/index.js"
//import dotenv from "dotenv";


import { connectMongo } from "./server/v1/config/mongo.config.js";
import { errorMiddleware } from "./server/v1/middleware/error.middleware.js";

//dotenv.config();

connectMongo();



const app = express();

app.use(express.json());
app.use(rutasGenerales);

//rutas por defecto error 404 ruta no encontrada
// Middleware validacion de errores
app.use(errorMiddleware);

export default app;

// const puerto = process.env.PORT || 3001;
// app.listen(puerto, () => console.log('Escuchando en puerto:', puerto)); 