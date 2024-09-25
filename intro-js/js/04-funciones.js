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


console.log(saludo()) //?muestra undefined por que la funcion no devuelve nada

const miFuncion =saludo
console.log(miFuncion())
