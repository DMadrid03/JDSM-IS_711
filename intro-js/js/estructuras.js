
//Listas
const lista = [1,6,48,1,'Daniel','Luis',[],false,undefined,null]

console.log(lista);

//!lo que es inmutable es el tipo de dato de que numeros puede ser una lista
//lista = 19 //!X no se puede hacer
const numeros = [1,2,3,4,5,6,7,8,9] //las listas son instancias
//const copiaNumeros = numeros // "se está pasando el valor por referencia" //!Así copiaNumeros solo es un apuntador a la memoria de numeros

//*desestructuración
    //ya que inicializamos copiaNumeros con corchetes hacemos una referencia nueva en memoria
const copiaNumeros = [...numeros] //los tres puntos suspensivos ("spread")



//? **********APLICACIONES DE LA DESESTRUCTURACIÓN************
//si quisiecemos sacar los ultimos valores de una lista por ejemplo
const [a,b,c,...otros] = numeros
console.log('variables de la desestructuración: ',a,b,c)
console.log('Resto de valores: ',otros)



//Metodos para listas
    //estos pueden mutar la lista por que lo que mueven es el valor no la referencia a memoria
console.log(numeros.pop()); //Elimina el ultimo elemento de la lista y muta la variable original
console.log(numeros.shift())

    //agregar elementos al inicio y al final de la lista
    console.log(numeros.push(5))
    console.log(numeros.unshift(12))
    
    //eliminar un valor a partir de la posicion y cantidad enviada
    console.log(numeros.splice(1,2))

