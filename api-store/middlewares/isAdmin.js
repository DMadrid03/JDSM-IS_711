const isAdmin = (req, res, next) => {
    console.log(req.role); // Aquí debes ver el rol extraído del token

    if (req.role !== 'admin') {
        return res.status(403).json({
            message: 'No tiene permisos para acceder a esta ruta'
        });
    }

    next();
};

export default isAdmin;
