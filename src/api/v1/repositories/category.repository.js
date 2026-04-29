import { Category } from "../models/mongo/category.mongo.model.js";

const categoryRepository = {
    getAll: async () => {
        return await Category.find().sort({ name: 1 });
    },

    findById: async (id) => {
        return await Category.findById(id);
    },

    findByName: async (name) => {
        return await Category.findOne({ name });
    },

    create: async (data) => {
        return await Category.create(data);
    },

    update: async (id, data) => {
        return await Category.findByIdAndUpdate(id, data, { new: true });
    },

    delete: async (id) => {
        return await Category.findByIdAndDelete(id);
    },
};

export default categoryRepository;