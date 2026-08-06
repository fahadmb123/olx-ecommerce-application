import {ErrorRequestHandler, Request,Response,NextFunction } from "express";



const errorMiddleware:ErrorRequestHandler = (err, req, res, next) => {

    res.status(400).json({
        success: false,
        message: err.message
    });

}

export default errorMiddleware