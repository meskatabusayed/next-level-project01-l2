import { z } from "zod";


// Define Zod schema
const academicFacultyValidationSchema = z.object({
    body: z.object({
    
        name: z.string({
            invalid_type_error : "academic faculty name must be string"
        }),
        
    })
})

export default academicFacultyValidationSchema;