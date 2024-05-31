import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../students/student.zod.validation';
import validateRequest from '../../app/middlewares/validateRequest';


const router = express.Router();


router.post('/create-student',validateRequest(studentValidations.studentValidationSchema), UserControllers.createStudentInDb);


export const UserRoutes = router;