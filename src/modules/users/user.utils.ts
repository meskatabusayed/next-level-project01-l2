import { TAcedemicSemester } from "../academicSemesters/academicSemester.interface";
import { User } from "./user.model";

const findLastStudentId = async() => {
    const laseStudent = await User.findOne(
       { 
        role : "student"
    },
    {
        id : 1,
        _id : 0
    }
    ).sort({cratedAt : -1}).lean()
    
    return laseStudent?.id ? laseStudent.id.substring(6) : undefined;
}

//year semesterCode  4digitNumber
export const generateStudentId = async (payload : TAcedemicSemester) => {
    //first time 0000;
    let currentId = (0).toString();
    const lastStudentId = await findLastStudentId();
    const lastStudentSemesterCode = lastStudentId?.substring(4 , 6);
    const lastStudentYear = lastStudentId?.substring(0 , 4);
    const currentSemesterCode = payload.code;
    const currentYear = payload.year;
    if(lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentYear === currentYear){
        currentId = lastStudentId.substring(6);

    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4 , "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;

}