import { z } from "zod";


// Define Zod schema
const academicSemesterValidationSchema = z.object({
    
    password: z.string({
        invalid_type_error : "password must be string"
    }).optional(),
    
});

export default academicSemesterValidationSchema;