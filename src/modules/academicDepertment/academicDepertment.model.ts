import { Schema, model } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";




const academicDepertmentSchema = new Schema<TAcademicDepertment>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    admissionFaculty: {
        type: Schema.Types.ObjectId,
        ref: 'academicFaculty'

    }
   
},
{
    timestamps : true
})



export const AcademicDepertment = model<TAcademicDepertment>('academicDepertment' , academicDepertmentSchema);