import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.profile;
    if (!token) {
        return next(createError(401, "You are not authenticated!"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next();
    });
};


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500
        let decodedData
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT)
            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub
        }
        next()
    } catch (error) {
        console.log(error)
    }
}


export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
        }
    });
};

