
import { TAcademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";


const createAcademicSemesterInDb = async (payload : TAcademicSemesterCode) => {
    const result = AcademicSemester.create(payload);
    return result;
}

export const AcademicSemesterServices = {
    createAcademicSemesterInDb

}