
//objeto / diccionario /Mapa

const persona = {
    nombre: 'Daniel',
    edad: 80
}

//si asignamos una propiedad que no existe, se crea
persona.apellido = 'Sanchez'

//los valores de las propiedades pueden ser de cualquier tipo
persona.direccion = {
    ciudad: 'San Pedro Sula',
    pais: 'Honduras',
    geo: {
        lat: 15,
        lng: 15
    }
}

//para acceder
console.log(persona.nombre)
console.log(persona['nombre'])
console.log(persona.apellido)
console.log('Latitud: ',persona.direccion.geo.lat)


//!eliminar una propiedad
delete persona.direccion.pais

console.log(persona.direccion.pais)


//DESESTRUCTURACIÓN
const {nombre: nombrePersona, edad, direccion} = persona //los primeros valores de las propiedades se guardan en estas 3 variables
const {geo} = direccion
const {lat} = geo

console.log(lat)