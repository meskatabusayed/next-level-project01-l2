import { Schema, model } from "mongoose";
import { TAcademicDepertment } from "./academicDepertment.interface";




const academicDepertmentSchema = new Schema<TAcademicDepertment>({
    name : {
        type : String,
        required : true,
        unique : true
    },
    adademicFaculty: {
        type: Schema.Types.ObjectId,
        ref: 'academicFaculty'

    }
   
},
{
    timestamps : true
})

academicDepertmentSchema.pre('save' , async function(next){
    const isDepertmentExist = await AcademicDepertment.findOne({
        name : this.name
    }) 
    if(isDepertmentExist){
        throw new Error("This Depertment is Already Exist");
    }
    next();
})


export const AcademicDepertment = model<TAcademicDepertment>('academicDepertment' , academicDepertmentSchema);