//FUNCIONES

function saludo(){
    //bloque de instrucciones
    console.log('Hola desde una función')
}

const saludo2 = function(){
    //bloque de instrucciones
    console.log('Hola desde una funcionión')
}
//no se va a poder modificar el valor de la variable, esta variable tiene la referencia de la función


//otra forma de definir las funciones: callback o función flecha
const imprimir = (nombre = "")=>{
    console.log('Hola desde una función flecha, ' + nombre)
}

const calcAreaCirc = (r)=>{

    //validar valor de entrada
        //?if(!r || !isNaN(r)) return 0
        //o bien
        if(!Number(r)) return 0 //*recomendada
    const area = Math.PI * Math.pow(r,2)
    return area
}
//misma función en una línea
const calcAreaCirc2 = (r)=> Math.PI * Math.pow(r,2) ?? 0 //!Inculida la validación

// console.log(calcAreaCirc(2))
// console.log(calcAreaCirc("2"))
// console.log(calcAreaCirc("hola"))

// console.log(saludo()) //?muestra undefined por que la funcion no devuelve nada

// const miFuncion =saludo
// console.log(miFuncion())
// console.log(imprimir())


// console.log(eval('2+2'))

//CASO ESPECIAL CON PARÁMETROS, LEER DOCUMENTO 