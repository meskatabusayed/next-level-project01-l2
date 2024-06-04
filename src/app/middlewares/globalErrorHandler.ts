import { NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";

const globalErrorHandler = (err : any , req : Request , res : Response , next : NextFunction) => {
    let statusCode = 500;
    let message =  err.message || "something went wrong";

    type TErrorSourse = {
      path : string | number;
      message : string;
    }

   
  let errorSourses : TErrorSourse = {
      path : " ",
      message : ""
    }

    const handleZodError  = (err : ZodError) => {
      const errorSourses : TErrorSourse = err.issues.map((issue : ZodIssue) => {
        return {
          path : issue?.path[issue.path.length - 1],
          message : issue.message,

        };
      });
      const statusCode = 400;
      return{
        statusCode,
        message: "validation error",
        errorSourses
      }

    }

    if(err instanceof ZodError){
      const simplifideError = handleZodError(err);
      statusCode = simplifideError?.statusCode;
      message =  simplifideError?.message;
      errorSourses = simplifideError?.errorSourses;
    }


    res.status(statusCode).json({
      success : false,
      message,
      errorSourses,
     
    })
  
  
  }

export const globalError = {
    globalErrorHandler

}