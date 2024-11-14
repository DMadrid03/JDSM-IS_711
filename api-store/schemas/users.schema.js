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

const userSchemaDB = z.object(
    {
        "username": z.string({
            invalid_type_error: "El nombre debe ser un string"
        }).trim().min(3, {
            message: "El nombre debe tener al menos 3 caracteres"
        }),
        "password_hash": z.string().trim(),
        "full_name": z.string().trim(),
        "role": z.enum(['admin', 'editor', 'viewer']),
        "email": z.string().email({
            message: "El email no es válido"
        }).endsWith('unah.hn', {
            message: "El email debe ser de un estudiante de la UNAH"
        }),
        "must_change_password": z.number().min(0).max(1), // "optional": permite no enviar la propiedad
        "status": z.enum(['active', 'inactive']), // si quiero que pueda aceptar nulos, uso: nullable
    },
).strict()

export const validateUserSchema = ( user )=>  userSchema.safeParse(user)

export const validatePartialSchema =(user) => userSchema.partial().safeParse(user)

export const validateUserSchemaDB = (user )=> userSchemaDB.safeParse(user)  
