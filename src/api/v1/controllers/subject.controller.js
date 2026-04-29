import * as subjectService from "../services/subject.service.js";

export const createController = async (req, res, next) => {
    try {
        const materia = await subjectService.createSubject(req.body, req.user);
        res.status(201).json({ materia });
    } catch (error) {
        next(error);
    }
};

export const getAllController = async (req, res, next) => {
    try {
        const resultado = await subjectService.getAllSubjects(req.user, req.query);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};

export const getByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const materia = await subjectService.getSubjectById(id, req.user);
        res.status(200).json({ materia });
    } catch (error) {
        next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const materia = await subjectService.updateSubject(id, req.body, req.user);
        res.status(200).json({ materia });
    } catch (error) {
        next(error);
    }
};

export const deleteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await subjectService.deleteSubject(id, req.user);
        res.status(200).json({ message: "Materia eliminada correctamente" });
    } catch (error) {
        next(error);
    }
};