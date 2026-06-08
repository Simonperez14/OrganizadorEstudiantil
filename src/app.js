import express from "express"
import rutasGenerales from "./server/v1/routes/index.js"
import cors from "cors";
import { rutaNoEncontradaMiddleware } from "./server/v1/middleware/ruta-no-encontrada.Middleware.js";
import xssSanitizer from "./server/v1/middleware/sanitizer-middleware.mjs";
//import dotenv from "dotenv";
import { connectMongo } from "./server/v1/config/mongo.config.js";
import { errorMiddleware } from "./server/v1/middleware/error.middleware.js";

//dotenv.config();

connectMongo();

const app = express();

const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://localhost:3001",
        "http://localhost:3002",
        "https://organizador-estudiantil.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // solo si usás cookies/sesión
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(xssSanitizer);

app.use(rutasGenerales);
app.use(rutaNoEncontradaMiddleware);
app.use(errorMiddleware);

export default app;

// const puerto = process.env.PORT || 3001;
// app.listen(puerto, () => console.log('Escuchando en puerto:', puerto)); 