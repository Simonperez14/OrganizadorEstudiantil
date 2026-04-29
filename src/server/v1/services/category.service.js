import categoryRepository from "../repositories/category.repository.js";

export const createCategory = async (data) => {

    if(!data.name) {
        const error = new Error("");
        error.status = 409;
        throw error;
    }

    // no puede haber dos categorías con el mismo nombre
    const existe = await categoryRepository.findByName(data.name);
    if (existe) {
        const error = new Error("Ya existe una categoría con ese nombre");
        error.status = 409;
        throw error;
    }

    return await categoryRepository.create(data);
};

export const getAllCategories = async () => {
    return await categoryRepository.getAll();
};

export const getCategoryById = async (id) => {
    const categoria = await categoryRepository.findById(id);

    if (!categoria) {
        const error = new Error("Categoría no encontrada");
        error.status = 404;
        throw error;
    }

    return categoria;
};

export const updateCategory = async (id, data) => {
    const categoria = await categoryRepository.findById(id);

    if (!categoria) {
        const error = new Error("Categoría no encontrada");
        error.status = 404;
        throw error;
    }

    // verificar que nombre no esté en uso por otra categoría
    if (data.name && data.name !== categoria.name) {
        const existeNombre = await categoryRepository.findByName(data.name);
        if (existeNombre) {
            const error = new Error("Ya existe una categoría con ese nombre");
            error.status = 409;
            throw error;
        }
    }

    return await categoryRepository.update(id, data);
};

export const deleteCategory = async (id) => {
    const categoria = await categoryRepository.findById(id);

    if (!categoria) {
        const error = new Error("Categoría no encontrada");
        error.status = 404;
        throw error;
    }

    await categoryRepository.delete(id);
};