import subjectRepository from "../repositories/subject.repository.js";

const LIMITE_PLAN_PLUS = 4;

export const createSubject = async (subjectData, user) => {

    // solo los estudiantes pueden crear materias
    /*
    if (user.role != "estudiante") {
        const error = new Error("Solo los estudiantes pueden crear materias");
        error.status = 403;
        throw error;
    }*/

    // si el usuario es "plus", verificar que no supere el limite de 4
    if (user.plan === "plus") {
        const cantidad = await subjectRepository.countByUser(user.userId);
        if (cantidad >= LIMITE_PLAN_PLUS) {
            const error = new Error(
                `Los usuarios con plan plus solo pueden tener ${LIMITE_PLAN_PLUS} materias. Hacé upgrade a premium para agregar más`
            );
            error.status = 403;
            throw error;
        }
    }

    const nuevaMateria = await subjectRepository.create({
        ...subjectData,
        userId: user.userId,
    });

    return nuevaMateria;
};

export const getAllSubjects = async (user, queryParams) => {
    const { page, limit, status, name, categoryId } = queryParams;

    //page = page || 1;
    //limit = limit || 10;

    // Construir filtros opcionales
    const filters = {};
    if (status) filters.status = status;
    if (categoryId) filters.categoryId = categoryId;
    if (name) filters.name = { $regex: name, $options: "i" }; 

    const { subjects, total } = await subjectRepository.findAllByUser(
        user.userId,
        filters,
        page,
        limit
    );

    // metadatos de paginación
    return {
        subjects,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    };
};

export const getSubjectById = async (id, user) => {
    const materia = await subjectRepository.findByIdAndUser(id, user.userId);

    if (!materia) {
        const error = new Error("Materia no encontrada");
        error.status = 404;
        throw error;
    }

    return materia;
};

export const updateSubject = async (id, subjectData, user) => {
    // verificar que la materia exista y le pertenezca al usuario
    const materia = await subjectRepository.findByIdAndUser(id, user.userId);

    if (!materia) {
        const error = new Error("Materia no encontrada");
        error.status = 404;
        throw error;
    }

    const materiaActualizada = await subjectRepository.update(id, subjectData);
    return materiaActualizada;
};

export const deleteSubject = async (id, user) => {
    // verificar que la materia exista y le pertenezca al usuario
    const materia = await subjectRepository.findByIdAndUser(id, user.userId);

    if (!materia) {
        const error = new Error("Materia no encontrada");
        error.status = 404;
        throw error;
    }

    await subjectRepository.delete(id);
};