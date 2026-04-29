import * as categoryService from "../services/category.service.js";

export const createController = async (req, res, next) => {
    try {
        const categoria = await categoryService.createCategory(req.body);
        res.status(201).json({ categoria });
    } catch (error) {
        next(error);
    }
};

export const getAllController = async (req, res, next) => {
    try {
        const categorias = await categoryService.getAllCategories();
        res.status(200).json({ categorias });
    } catch (error) {
        next(error);
    }
};

export const getByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoria = await categoryService.getCategoryById(id);
        res.status(200).json({ categoria });
    } catch (error) {
        next(error);
    }
};

export const updateController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoria = await categoryService.updateCategory(id, req.body);
        res.status(200).json({ categoria });
    } catch (error) {
        next(error);
    }
};

export const deleteController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await categoryService.deleteCategory(id);
        res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        next(error);
    }
};