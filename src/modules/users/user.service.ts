import config from "../../app/config";
import { TAcedemicSemester } from "../academicSemesters/academicSemester.interface";
import { AcademicSemester } from "../academicSemesters/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import {  TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";


const createStudentIntoDB = async (password : string , payload: TStudent) => {
    //create a user object
    const userData : Partial<TUser> = {};
    //if password not given , use default password
    userData.password = password || (config.default_pass as string)

    userData.role = 'student';

    

    //find academic semester info
    const academicSemester = await AcademicSemester.findById(payload.admissionSemester)
    console.log(payload);
    //create geneerate id
    userData.id = await generateStudentId(academicSemester as TAcedemicSemester); 
    
    //create user
    const newUser = await User.create(userData); 
    if(Object.keys(newUser).length){
        //set id , _id as user
        payload.id = newUser.id;
        payload.user = newUser._id;
        const newStudent = await Student.create(payload);
        return newStudent;
    }


    
  };

  export const userServices = {
    createStudentIntoDB

  }