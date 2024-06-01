import express from 'express';

import validateRequest from '../../app/middlewares/validateRequest';
import { AcademicDepertmentControllers } from './academicDepertment.controller';
import academicDepertmentValidationSchema from './academicDepertment.validation';



const router = express.Router();
router.post('/create-academic-depertment' , validateRequest(academicDepertmentValidationSchema) , AcademicDepertmentControllers.createAcademicDepertmentInDb);

// router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

// router.get(
//     '/:semesterId',
//     AcademicSemesterControllers.getSingleAcademicSemester,
//   );

//   router.patch(
//     '/:semesterId',
//     validateRequest(
//       AcademicSemesterValidations.updateAcademicSemesterValidationSchema,
//     ),
//     AcademicSemesterControllers.updateAcademicSemester,
//   );

export const academicDepertmentRoutes = router; 