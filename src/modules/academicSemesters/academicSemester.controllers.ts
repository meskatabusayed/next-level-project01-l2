import {  RequestHandler,} from "express";



const createAcademicSemesterInDb  : RequestHandler = async (req, res, next) => {
    try {
        const{password , student : studentData} = req.body;
      
     
    //   const result = await userServices.createStudentIntoDB(password , studentData);
      res.status(200).json({
          success: true,
          message: 'Student is created succesfully',
        //   data: result,
        });
    } catch (err) {
      next(err);
    }
  };

  export const AcademicSemesterControllers = {
    createAcademicSemesterInDb
  }
  