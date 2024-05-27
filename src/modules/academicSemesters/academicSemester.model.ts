import { Schema, model } from "mongoose";

import { TAcademicSemesterCode, TAcademicSemesterName, TAcedemicSemester, TMonths } from "./academicSemester.interface";


const months : TMonths[] = [
    "January" ,
     "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"

]

const AcademicSemesterName : TAcademicSemesterName[] = [
    "Autunm" , "summar" , "Fall"
]

const AcademicSemesterCode : TAcademicSemesterCode[] = [
    "01" , "02" , "03"
]


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