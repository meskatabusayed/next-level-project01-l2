import Joi from 'joi';

//creating a schema using joi

// Define Joi schemas
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .message(
      'First name must start with a capital letter and contain only letters.',
    ),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .regex(/^[A-Za-z]+$/)
    .message('Last name must contain only letters.'),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNo: Joi.string().required(),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentSchema = Joi.object({
  id: Joi.string().required(),
  password: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .required(),
});

export default studentSchema;
