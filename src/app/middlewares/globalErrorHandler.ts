import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err : any , req : Request , res : Response , next : NextFunction) => {
    const statusCode = 500;
    const message = err.message || "something went wrong";

    type TErrorSourse = {
      path : string | number;
      message : string;
    }

    const errorSourse : TErrorSourse = {
      path : " ",
      message : ""
    }


    res.status(statusCode).json({
      success : false,
      message,
      errorSourse,
      error : err
    })
  
  
  }

export const globalError = {
    globalErrorHandler

}