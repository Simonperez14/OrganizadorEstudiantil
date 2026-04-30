import * as generateSubjectDescription from '../services/ia.service.js';

export const generateDescriptionController = async (req, res, next) => {
    try {
        
        

        const { subjectName, style } = req.body;
        const resultado = await generateSubjectDescription.generateSubjectDescription(subjectName, style);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};