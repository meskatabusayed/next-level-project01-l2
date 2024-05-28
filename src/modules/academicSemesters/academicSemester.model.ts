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
        type : String,
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
    
} , {
    timestamps : true
})

academicSemesterSchema.pre('save', async function(next){
    const isSemesterExists = await AcademicSemester.findOne({
        year : this.year,
        name : this.name
    })

    if(isSemesterExists){
        throw new Error("Semester is Already Exists");
    }
    next();
})


export const AcademicSemester = model<TAcedemicSemester>('academicSemester' , academicSemesterSchema);