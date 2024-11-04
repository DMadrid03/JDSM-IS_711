import cors from 'cors'

export const middlewareCors = cors({
  origin:(origin, callback)=>{
        const accesosPermitidos = [
            'http://localhost:3000',
            'http://localhost:5500',
            'https://hola.com'
        ]
        if (accesosPermitidos.includes(origin)){
            callback(null, true)
        }
        if (!origin){ //?necesario para que responda a peticiones desde el servidor (como desde postman)
            callback(null, true)
        }
        callback(new Error('No permitido'))        
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
})