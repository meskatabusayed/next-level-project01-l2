import express from 'express';


const router = express.Router();
router.post('/create-academic-semester');
// router.post('/create-student', StudentControllers.createStudent);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);

export const academicSemesterRoutes = router; 