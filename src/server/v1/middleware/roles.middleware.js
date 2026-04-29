export const roleMiddleware = (rolRequerido) => {
    return (req, res, next) => {
        if (req.user?.role !== rolRequerido) {
            const error = new Error("No tienes permisos para realizar esta acción");
            error.status = 403;
            return next(error);
        }
        return next();
    };
};