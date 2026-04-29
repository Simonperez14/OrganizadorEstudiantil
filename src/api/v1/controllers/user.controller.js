import * as userService from "../services/user.service.js";

export const getAllController = async (req, res, next) => {
    try {
        const usuarios = await userService.getAllUser();
        res.status(200).json({ usuarios })
    } catch (error) {
        next(error)
    }
}


export const createController = async (req, res, next) => {
    try {
        const { body } = req;
        const usuario = await userService.createUser(body);
        res.status(200).json({ usuario })
    } catch (error) {
        next(error)
    }
}



export const upgradePlanController = async (req, res, next) => {
    try {
        const { userId } = req.user; // viene del token JWT
        const usuario = await userService.upgradePlan(userId);
        res.status(200).json({ usuario });
    } catch (error) {
        next(error);
    }
};

