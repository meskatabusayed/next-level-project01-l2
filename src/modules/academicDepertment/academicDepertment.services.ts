import { TAcademicDepertment } from "./academicDepertment.interface";
import { AcademicDepertment } from "./academicDepertment.model";





const createAcademicDepertmentInDb = async (payload : TAcademicDepertment) => {
    const result = AcademicDepertment.create(payload);
    return result;
}



const getAllAcademicDepertmentsFromDB = async () => {
    const result = await AcademicDepertment.find().populate('adademicFaculty');
    return result;
  };

// const getSingleAcademicSemesterFromDB = async (id: string) => {
//     const result = await AcademicSemester.findById(id);
//     return result;
//   };

export const AcademicDepertmentServices = {
    createAcademicDepertmentInDb,
    getAllAcademicDepertmentsFromDB

}