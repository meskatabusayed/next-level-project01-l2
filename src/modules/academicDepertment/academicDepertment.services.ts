import { TAcademicDepertment } from "./academicDepertment.interface";
import { AcademicDepertment } from "./academicDepertment.model";





const createAcademicDepertmentInDb = async (payload : TAcademicDepertment) => {
    const result = AcademicDepertment.create(payload);
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

export const AcademicFacultyServices = {
    createAcademicDepertmentInDb

}