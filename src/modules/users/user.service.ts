import config from "../../app/config";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import {  TUser } from "./user.interface";
import { User } from "./user.model";


const createStudentIntoDB = async (password : string ,studentData: TStudent) => {
    //create a user object
    const userData : Partial<TUser> = {};
    //if password not given , use default password
    userData.password = password || (config.default_pass as string)

    userData.role = 'student';

    //create geneerate id
    userData.id = 'bwu/bta/22/011'
    
    //create user
    const newUser = await User.create(userData); 
    if(Object.keys(newUser).length){
        //set id , _id as user
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = await Student.create(studentData);
        return newStudent;
    }


    
  };

  export const userServices = {
    createStudentIntoDB

  }