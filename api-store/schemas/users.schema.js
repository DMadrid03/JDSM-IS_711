import { z } from "zod";

const userSchema = z.object(
    {
        "name": z.string({
            invalid_type_error: "El nombre debe ser una cadena de texto",
        }).trim().min(3),
        "username": z.string().trim().min(5),
        "email": z.string().email().endsWith("unah.hn",{
            message: "El email debe ser de un estudiante UNAH"
        }) ,        
        "phone": z.string().trim().length(8),
        "website": z.string().url().startsWith("https://") ,        
    }

)

export const validateUserSchema = ( user )=>  userSchema.safeParse(user)

export const validatePartialSchema =(user) => userSchema.partial().safeParse(user)

