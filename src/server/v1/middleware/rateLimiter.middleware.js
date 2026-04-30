import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 5, // máximo 5 requests por IP
    standardHeaders: true, // envia datos en el header (ver en postman )
    legacyHeaders: false, // desactiva headers viejos
    message: {
        error: "Too many requests, try again later."
    }
});

export default limiter;