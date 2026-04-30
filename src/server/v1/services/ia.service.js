import iaModel from "../config/ia.config.js";

export const generateSubjectDescription = async (subjectName, style) => {
    const estilos = {
        motivacional: "motivacional y alentador, con lenguaje positivo que anime al estudiante",
        tecnico: "técnico y preciso, orientado a los contenidos y habilidades de la materia",
        resumido: "breve y directo, en no más de dos oraciones",
    };

    const prompt = `Generá una descripción para una materia universitaria llamada "${subjectName}". 
El estilo debe ser ${estilos[style]}.`;

    try {
        const result = await iaModel.generateContent(prompt);
        const descripcion = result.response.text().trim();
        return { descripcion, generadoPorIA: true };
    } catch (error) {
        console.error("Error al procesar con IA:", error.message);

        return {
            descripcion: null,
            generadoPorIA: false,
            mensaje: "El servicio de IA no está disponible en este momento. Podés escribir la descripción manualmente.",
        };
    }
};