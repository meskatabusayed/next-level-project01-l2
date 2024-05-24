import { Request, Response } from 'express';
import { StudentServices } from './student.services';
import studentSchema from './student.validation';


const createStudent = async (req: Request, res: Response) => {
  try {
    
    const { student: studentData } = req.body;

    const { error, value } = studentSchema.validate(studentData);
    const result = await StudentServices.createStudentIntoDB(value);

    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Student is created succesfully',
        data: result,
      });
    }

    
    
   
  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message ||  'Something went wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
