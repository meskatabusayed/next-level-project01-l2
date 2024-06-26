import {  RequestHandler,} from "express";
import { AcademicFacultyServices } from "./academicFaculty.services";




const createAcademicFacultyInDb  : RequestHandler = async (req, res, next) => {
    try {
      const result = await AcademicFacultyServices.createAcademicFacultyInDb(req.body);
      res.status(200).json({
          success: true,
          message: 'Academic Faculty is created succesfully',
          data: result,
        });
    } catch (err) {
      next(err);
    }
  };

//   const getAllAcademicSemesters : RequestHandler = async (req, res , next) => {
//     try{
//     const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
//     res.status(200).json({
//       success: true,
//       message: 'fach all Academic Semesters',
//       data: result,
//     })
//     }catch(err){
//     next(err);
//   }}
  
//   const getSingleAcademicSemester : RequestHandler =  async(req, res , next) => {
    
//     try{
//     const { semesterId } = req.params;
//     const result =
//       await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
//       res.status(200).json({
//         success: true,
//         message: 'fatch  Academic Semester',
//         data: result,
//       })
//     }catch(err){
//       next(err);
//     }
//   };
 

  export const AcademicFacultyControllers = {
    createAcademicFacultyInDb,
   
  }
  