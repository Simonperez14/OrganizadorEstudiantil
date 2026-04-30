import express from "express"
import rutasGenerales from "./server/v1/routes/index.js"
import { rutaNoEncontradaMiddleware } from "./server/v1/middleware/ruta-no-encontrada.Middleware.js";
import xssSanitizer from "./server/v1/middleware/sanitizer-middleware.mjs";
//import dotenv from "dotenv";
import { connectMongo } from "./server/v1/config/mongo.config.js";
import { errorMiddleware } from "./server/v1/middleware/error.middleware.js";

//dotenv.config();

connectMongo();



const app = express();

app.use(express.json());

app.use(xssSanitizer);

app.use(rutasGenerales);
app.use(rutaNoEncontradaMiddleware);
app.use(errorMiddleware);

export default app;

// const puerto = process.env.PORT || 3001;
// app.listen(puerto, () => console.log('Escuchando en puerto:', puerto)); 