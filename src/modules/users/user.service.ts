import mongoose from "mongoose";
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
    //start session
    const session = await mongoose.startSession();
    try{
      session.startTransaction();
    //create geneerate id
    userData.id = await generateStudentId(academicSemester as TAcedemicSemester); 
    
    //create user
    const newUser = await User.create([userData] , {session}); 
    if(!newUser.length){

      throw new Error("faild to create user");


    }
        //set id , _id as user
        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;
        const newStudent = await Student.create([payload] , {session});
        if(!newStudent.length){
          throw new Error("Faild to create student")
        }
        await session.commitTransaction();
        await session.endSession();
        return newStudent;
    


    }catch(error){
      await session.abortTransaction();
      await session.endSession();

    }
    

    
  };

  export const userServices = {
    createStudentIntoDB

  }