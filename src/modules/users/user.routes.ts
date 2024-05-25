import express from 'express';
import { UserControllers } from './user.controller';


const router = express.Router();

router.post('/create-user', UserControllers.createStudentInDb);


export const StudentRoutes = router;