import { searchBooks } from "../services/books.service.js";

export const searchBooksController = async (req, res, next) => {
    try {
        const { query, limit } = req.query;
        const resultado = await searchBooks(query, limit);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
};