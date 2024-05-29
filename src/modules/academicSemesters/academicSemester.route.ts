import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controllers';
import validateRequest from '../../app/middlewares/validateRequest';
import academicSemesterValidationSchema from './academicSemester.zod.validation';


const router = express.Router();
router.post('/create-academic-semester' , validateRequest(academicSemesterValidationSchema) , AcademicSemesterControllers.createAcademicSemesterInDb);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

router.get(
    '/:semesterId',
    AcademicSemesterControllers.getSingleAcademicSemester,
  );

export const academicSemesterRoutes = router; 