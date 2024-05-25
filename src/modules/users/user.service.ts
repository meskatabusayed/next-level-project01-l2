import { TStudent } from "../students/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";


const createUserIntoDB = async (password : string ,student: TStudent) => {
    // if(await user.isUserExists(user.id)){
    //   throw new Error("user already exist")
  
    // }
    const result = await User.create(user); //built in static methods
    
    
    // const student = new Student(studentdata); //built in instance methods
    // if(await student.isUserExists(studentdata.id)){
    //   throw new Error("user already exist")
  
    // }
    // const result = await student.save();
    return result;
  };

  export const userServices = {
    createUserIntoDB

  }