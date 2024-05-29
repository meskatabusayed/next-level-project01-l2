import { TAcedemicSemester } from "../academicSemesters/academicSemester.interface";

//year semesterCode  4digitNumber
export const generateStudentId = (payload : TAcedemicSemester) => {
    //first time 0000;
    const currentId = (0).toString();
    let incrementId = (Number(currentId) + 1).toString().padStart(4 , "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;

}