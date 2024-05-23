import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/students/student.route';

const app = express();

//parser
app.use(cors())
app.use(express.json())

//application routes
app.use("/api/v1/students" , StudentRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
