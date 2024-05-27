import {  RequestHandler,} from "express";
import { AcademicSemesterServices } from "./academicSemester.services";



const createAcademicSemesterInDb  : RequestHandler = async (req, res, next) => {
    try {
      const result = await AcademicSemesterServices.createAcademicSemesterInDb(req.body);
      res.status(200).json({
          success: true,
          message: 'Academic Semester  is created succesfully',
          data: result,
        });
    } catch (err) {
      next(err);
    }
  };

  export const AcademicSemesterControllers = {
    createAcademicSemesterInDb
  }
  