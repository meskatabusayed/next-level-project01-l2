import { Schema, model } from 'mongoose';

import {
  TUserName,
  TGuardian,
  TLocalGuardian,
  TStudent,
  
  
} from './student.interface';
import validator from 'validator';



const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    // maxlength: 20,
    // validate : {
    //   validator : function(value : any){
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message : "{VALUE}  is capitalize needed"
    // }
  },
  middleName: String,
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    // validate : {
    //   validator: (value : string) => validator.isAlpha(value),
    //   message : "{VALUE} is not valid"

    // }
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
  },
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
  },
  user : {
    type : Schema.Types.ObjectId,
    required : [true , 'user id must be required'],
    unique: true,
    ref : 'User'
  },
  
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: 'Invalid gender value: {VALUE}',
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: String,
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: {
      validator: (value: string) => {
        return validator.isEmail(value);
      },
      message: '{VALUE} email is not valid',
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
  },
  bloogGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: [true, 'Blood group is required.'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
  },
  permanentAddres: {
    type: String,
    required: [true, 'Permanent address is required.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuradianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImg: String,
  
  isDeleted : {
    type : Boolean,
    default : false
  }
},
{toJSON : {
  virtuals : true
}
  
}
);

//virtual
// studentSchema.virtual("fullname").get(function(){
//   return this.name.firstName + this.name.middleName + this.name.lastName;
// })

//create pre middleware / hook

//query middleware
studentSchema.pre('find' , function(next){
  this.find({isDeleted : {$ne : true}})
  next();
})
studentSchema.pre('findOne' , function(next){
  this.find({isDeleted : {$ne : true}})
  next();
})
//aggregate middleware
//[{$match : {isDeleted : {$ne : true}}} , {$match : {id : id }}]
studentSchema.pre('aggregate' , function(next){
  this.pipeline().unshift({$match : {isDeleted : {$ne : true}}})
  next();
})

//create custom static method
studentSchema.statics.isUserExists = async function(id : string){
  const existUser = await Student.findOne({id});
  return existUser;
}



//create custom instance method
// studentSchema.methods.isUserExists = async function (id: string) {
//   const existUser = await Student.findOne({ id });
//   return existUser;
// };

export const Student = model<TStudent>('Student', studentSchema);


