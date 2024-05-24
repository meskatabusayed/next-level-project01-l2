import { Student } from './student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentdata: TStudent) => {
  if(await Student.isUserExists(studentdata.id)){
    throw new Error("user already exist")

  }
  const result = await Student.create(studentdata); //built in static methods
  
  
  // const student = new Student(studentdata); //built in instance methods
  // if(await student.isUserExists(studentdata.id)){
  //   throw new Error("user already exist")

  // }
  // const result = await student.save();
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
