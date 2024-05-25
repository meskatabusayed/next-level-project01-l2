import { userServices } from "./user.service";
import userValidationSchema from "./user.zod.validation";

const createStudentInDb = async (req: Request, res: Response) => {
    try {
        const{password , student : studentData} = req.body;
      
      //creating schema validation using zod
    //   const zodParsedData = userValidationSchema.parse(usertData);
      const result = await userServices.createUserIntoDB(password , studentData);
      res.status(200).json({
          success: true,
          message: 'Student is created succesfully',
          data: result,
        });
    } catch (err : any) {
      res.status(500).json({
        success: false,
        message: err.message ||  'Something went wrong',
        error: err,
      });
    }
  };

  export const UserControllers = {
    createStudentInDb
  }
  