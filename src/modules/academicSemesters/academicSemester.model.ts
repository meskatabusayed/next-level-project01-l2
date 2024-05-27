import { Schema, model } from "mongoose";

import {  TAcedemicSemester, } from "./academicSemester.interface";
import { AcademicSemesterCode, AcademicSemesterName, months } from "./academicSemester.constants";





const academicSemesterSchema = new Schema<TAcedemicSemester>({
    name : {
        type : String,
        enum : AcademicSemesterName,
        required : true,
    },
    year: {
        type : Date,
        required : true,
    },
    code : {
        type : String,
        enum : AcademicSemesterCode,
        required: true
        
    },
    startMonth : {
        type : String,
        enum : months,
    },
    endMonth : {
        type : String,
        enum : months,
        
    },
    
})


export const AcademicSemester = model<TAcedemicSemester>('academicSemester' , academicSemesterSchema);