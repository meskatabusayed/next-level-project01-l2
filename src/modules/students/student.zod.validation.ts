import { ZodAny, z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z.string().min(1).max(20),
    middleName: z.string().optional(),
    lastName: z.string().min(1),
  });
  
  const guardianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
  });
  
  const localGuardianValidationSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
  });
  
  const studentValidationSchema = z.object({
    id: z.string(),
    password: z.string(),
    name: userNameValidationSchema,
    gender: z.enum(['male', 'female', 'other']),
    dateOfBirth: z.string(),
    email: z.string().email(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    presentAddress: z.string(),
    permanentAddres: z.string(),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
    isDeleted: z.boolean().default(false),
  });
  

  export default studentValidationSchema;