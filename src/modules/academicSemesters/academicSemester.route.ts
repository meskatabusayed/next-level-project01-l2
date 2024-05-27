import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controllers';
import validateRequest from '../../app/middlewares/validateRequest';
import academicSemesterValidationSchema from './academicSemester.zod.validation';


const router = express.Router();
router.post('/create-academic-semester' , validateRequest(academicSemesterValidationSchema) , AcademicSemesterControllers.createAcademicSemesterInDb);
// router.post('/create-student', StudentControllers.createStudent);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);

export const academicSemesterRoutes = router; 