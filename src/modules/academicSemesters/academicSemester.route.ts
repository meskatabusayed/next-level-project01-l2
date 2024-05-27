import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controllers';


const router = express.Router();
router.post('/create-academic-semester' , AcademicSemesterControllers.createAcademicSemesterInDb);
// router.post('/create-student', StudentControllers.createStudent);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);

export const academicSemesterRoutes = router; 