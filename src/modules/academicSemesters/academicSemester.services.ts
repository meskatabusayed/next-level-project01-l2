
import {  TAcedemicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterInDb = async (payload : TAcedemicSemester) => {

    type TAcedemicSemesterNameCodeMapper = {
        [key : string] : string;
    }

    const academicSemesterNameCodeMapper : TAcedemicSemesterNameCodeMapper = {
        Autunm  : "01",
        summar  : "02", 
        Fall : "03"
    }

    if(academicSemesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error("Invalid Semester");
    }
    const result = AcademicSemester.create(payload);
    return result;
}



const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
  };

export const AcademicSemesterServices = {
    createAcademicSemesterInDb,
    getAllAcademicSemestersFromDB

}