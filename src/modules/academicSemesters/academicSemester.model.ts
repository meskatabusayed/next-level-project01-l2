import { Schema, model } from "mongoose";

import { TAcedemicSemester, TMonths } from "./academicSemester.interface";


const months : TMonths[] = [
    "January" ,
     "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"

]


const academicSemesterSchema = new Schema<TAcedemicSemester>({
    name : {
        type : String,
        enum : ["Autunm" , "summar" , "fall"],
        required : true,
    },
    year: {
        type : Date,
        required : true,
    },
    code : {
        type : String,
        enum : ["01" , "02" , "03"],
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