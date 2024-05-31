import express from 'express';
import academicFacultyValidationSchema from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.conteroller';
import validateRequest from '../../app/middlewares/validateRequest';


const router = express.Router();
router.post('/create-academic-faculty' , validateRequest(academicFacultyValidationSchema) , AcademicFacultyControllers.createAcademicFacultyInDb);

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

export const academicFacultyRoutes = router; 