import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const genAI = new GoogleGenerativeAI(process.env.IA_API_KEY);

export const iaModel = genAI.getGenerativeModel({
    model: "gemini-2.5-flash-lite",
    systemInstruction: {
        role: "system",
        parts: [{
            text: `Eres un asistente especializado en educación universitaria. 
Tu única función es generar descripciones para materias universitarias según el estilo solicitado. 
Devuelve solo la descripción, sin introducciones ni despedidas.`
        }]
    }
});

export default iaModel;