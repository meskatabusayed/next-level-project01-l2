import express, { NextFunction} from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/students/student.route';
import { UserRoutes } from './modules/users/user.routes';
import { error } from 'console';
import { globalError } from './app/middlewares/globalErrorHandler';
import notFoundRoute from './app/middlewares/notFound';
import { academicSemesterRoutes } from './modules/academicSemesters/academicSemester.route';
import { academicFacultyRoutes } from './modules/academicFaculty/academicFaculty.route';

const app = express();

//parser
app.use(cors())
app.use(express.json())

//application routes
app.use("/api/v1/students" , StudentRoutes);
app.use("/api/v1/users" , UserRoutes);
app.use("/api/v1/academic-semesters" , academicSemesterRoutes);
app.use("/api/v1/academic-faculties" , academicFacultyRoutes);
app.use("/api/v1/academic-depertments" , academicFacultyRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use(globalError.globalErrorHandler)
app.use(notFoundRoute);

export default app;
