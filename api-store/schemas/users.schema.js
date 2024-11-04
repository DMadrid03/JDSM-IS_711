import { z } from "zod";

const userSchema = z.object(
    {
        "name": z.string({
            invalid_type_error: "El nombre debe ser una cadena de texto",
        }).trim().min(3),
        "username": z.string({
            invalid_type_error: "El username debe ser una cadena de texto",
        }).trim().min(5),
        "email": z.string({
            invalid_type_error: "El email debe ser una cadena de texto",
        }).email().endsWith("unah.hn",{
            message: "El email debe ser de un estudiante UNAH"
        }) ,        
        "phone": z.string(
            {
                invalid_type_error: "El telefono debe ser una cadena de texto",
            }
        ).trim().length(8),
        "website": z.string({
            invalid_type_error: "El sitio web debe ser una cadena de texto",
        }).url().startsWith("https://") ,        
    }

)

export const validateUserSchema = ( user )=>  userSchema.safeParse(user)

export const validatePartialSchema =(user) => userSchema.partial().safeParse(user)

