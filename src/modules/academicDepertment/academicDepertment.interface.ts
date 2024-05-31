import { Types } from "mongoose";

export type TAcademicDepertment = {
    name : string;
    admissionFaculty: Types.ObjectId;
 }
 