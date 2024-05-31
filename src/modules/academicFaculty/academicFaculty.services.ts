
import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";



const createAcademicFacultyInDb = async (payload : TAcademicFaculty) => {
    const result = AcademicFaculty.create(payload);
    return result;
}



// const getAllAcademicSemestersFromDB = async () => {
//     const result = await AcademicSemester.find();
//     return result;
//   };

// const getSingleAcademicSemesterFromDB = async (id: string) => {
//     const result = await AcademicSemester.findById(id);
//     return result;
//   };

export const AcademicSemesterServices = {
    createAcademicFacultyInDb 

}