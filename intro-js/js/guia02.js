
//*paso por valor y referencia

//?paso por valor
    //los tipos primitivos se pasan por valor (copia del valor)
let a = 10
let b = a
b = 20 //modificar el valor de b no afecta "a"
console.log(a,b) //?10,20



//?paso por referencia
    //los objetos se pasan por referencia (copia de la referencia)
let persona = {
    nombre: 'Daniel',
}
let otraPersona = persona
otraPersona.nombre = "Miguel" 
console.log(persona,otraPersona) //?{nombre: 'Miguel'}, {nombre: 'Miguel'}
//!modificar el nombre de otra persona modifica el nombre de persona 
//!ya que ambas variables apuntan a la misma dirección de memoria


let obj1 = {
    nombre: 'Daniel'
}
let obj2 = {...obj1} //?copia de obj1
obj2.nombre = 'Luisa'
console.log(obj1,obj2)



//uso de map
const array = [1,2,3,4,5,6,7,8,9,10]
const cuadrados = array.map((num)=>num**2)
console.log(cuadrados)

//uso de filter
const impares = array.filter((num)=>num%2!=0)
console.log(impares)

//uso de find
const primerPar = array.find((num)=>num%2==0)
console.log("Primer par: ",primerPar)

const personas = ["Daniel","Luis","Pedro","Juan"];
const personaEncontrada = personas.find((persona)=>persona =="Pedro")
console.log("personaEncontrada: ",personaEncontrada)  