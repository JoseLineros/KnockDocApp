const jwt = require('jsonwebtoken');

const Validator = {};

Validator.verifyToken = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'authorization header no existe' });
        }
        let isBearer = req.headers.authorization.split(' ')[0];
        let token = req.headers.authorization.split(' ')[1];
        if (isBearer !== 'Bearer') {
            return res.status(401).json({ message: 'El Bearer no es valido' });
        }
        if (!token) {
            return res.status(401).json({ message: 'El token no es valido' });
        }

        const payload = jwt.verify(token, 'pato');
        if (!payload) {
            return res.status(401).json({ message: 'request no permitido' });
        }

        //! Save info payload
        req.decoded = { _id: payload._id, email: payload.email, role: payload.role };

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Request no permitido' });
    }
};

module.exports = Validator;
