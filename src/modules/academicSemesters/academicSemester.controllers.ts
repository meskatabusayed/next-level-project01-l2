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

  const getAllAcademicSemesters : RequestHandler = async (req, res , next) => {
    try{
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
    res.status(200).json({
      success: true,
      message: 'fach all Academic Semesters',
      data: result,
    })
    }catch(err){
    next(err);
  }}
  
  const getSingleAcademicSemester : RequestHandler =  async(req, res , next) => {
    
    try{
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  
    }catch(err){
      next(err);
    }
  };
 

  export const AcademicSemesterControllers = {
    createAcademicSemesterInDb,
    getAllAcademicSemesters,
    getSingleAcademicSemester
  }
  