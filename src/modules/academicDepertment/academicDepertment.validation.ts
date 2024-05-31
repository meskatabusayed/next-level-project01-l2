import { z } from "zod";


// Define Zod schema
const academicDepertmentValidationSchema = z.object({
    body: z.object({
    
        name: z.string({
            invalid_type_error : "academic Depertment name must be string",
            required_error : "name is required"
        }),
        admissionFaculty : z.string({
            invalid_type_error : "academic Faculty id must be string",
            required_error : "Faculty is required"
        })
        
    })
})

export default academicDepertmentValidationSchema;