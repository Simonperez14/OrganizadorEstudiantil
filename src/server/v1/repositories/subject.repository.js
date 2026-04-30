import { Subject } from "../models/mongo/subject.mongo.model.js";

const subjectRepository = {
    // validar limite del plan
    countByUser: async (userId) => {
        return await Subject.countDocuments({ userId });
    },

    // crear materia
    create: async (data) => {
        return await Subject.create(data);
    },

    // obtener todas las materias del usuario
    findAllByUser: async (userId, filters, page, limit) => {
        const query = { userId, ...filters };

        if(page == undefined) {
            page = 1;
        }
        if(limit == undefined) {
            limit = 10;
        }
        
        const skip = (page - 1) * limit;
        
        const [subjects, total] = await Promise.all([
            Subject.find(query)
                //.populate("categoryId", "name")  // nombre de la categoría
                .skip(skip)
                .limit(limit)
                .sort({ createdAt: -1 }),
            Subject.countDocuments(query),
        ]);

        return { subjects, total };
    },

    // materia por id
    findById: async (id) => {
        return await Subject.findById(id).populate("categoryId", "name");
    },

    //  materia por id y userId (para verificar que le pertenece)
    findByIdAndUser: async (id, userId) => {
        return await Subject.findOne({ _id: id, userId });
    },

    // actualizar una materia
    update: async (id, data) => {
        return await Subject.findByIdAndUpdate(id, data, { new: true });
    },

    // eliminar una materia
    delete: async (id) => {
        return await Subject.findByIdAndDelete(id);
    },
};

export default subjectRepository;