
//declaración de variables

//!Modo no recomendado
var nombre = "Juan";
var nombre = "Pedro"; // ?esta segunda línea se convierte en un apuntador para la primera variable
var apellido = "Sanchez"
console.log(nombre) //? PUnto y coma es opcional, 

//*Modo recomendado
    //? let valida que no haya otra variable llamada así para no permitirlo
    //? las variables declaradas de este modo tienen ámbito de bloque
    let bloque = 'Sánchez' //*Es se puede asignar valor a las cadenas con comillas dobles o simples
    apellido = "Alvarenga"
    apellido = 100 //?También permitido porque en js no existe el tipado de Datos

//*Otro modo Recomendado para variables constantes
    const dni = '0508200300269'
        //dni = '1513513515' //!error ya que es una variable declarada inmutable
        //?Es obligatorio ser inicializada al momento de declararse
        //?también ámbito de bloque


//?ESTE BLOQUE DE LLAVES REPRESENTA UN NUEVO ÁMBITO
{
    nombre ="NombreBloque"
    let apellido ="ApellidoBloque"
    let dni = "ABC"
    let rtn = "rtn"
    console.log("=============NUEVO BLOQUE==================")
    console.log(nombre)
    console.log(apellido)
    console.log(rtn)
}

console.log("=============FUERA DEL BLOQUE==================")
    console.log(nombre)
    console.log(apellido)
    //!mostraría error de referencia 
    //! console.log(rtn) por que rtn tiene nada más alcance de bloque al bloque anterior




//?======================================================================================================
//*truthy
    //*true,1,"Cadena no vacía", otro valor que no represente ausencia
//!Falsy
    //! false, 0, null, []
//?Nulish
    //? undefined

//undefined significa que nunca existió un valor

// let test;

// if(test){
//     console.log('se cumplió');
// }
// else{
//     console.log("nadita");
// } //?devolvió nadita

// let test = null;

// if(test == 0){
//     console.log('se cumplió');
// }
// else{
//     console.log("nadita");
// }// ?devolvió nadita

// let test = null;

// if([]==[]){ //es falso por que en estructuras de datos se comparan las referencias en memoria no los valores
//     console.log('se cumplió');
// }
// else{
//     console.log("nadita");
// }// ?devolvió nadita

// let test = "1";

// if(test == 1){ //?doble igual es comparación de datos, js va a castear si se puede
//     console.log('se cumplió');
// }
// else{
//     console.log("nadita");
// }// ?devolvió se cumplió

let test = "1";

if(test === 1){ //?triple igual es comparación estricta, mismo tipo y mismo valor
    console.log('se cumplió');
}
else{
    console.log("nadita");
}// ?devolvió nadita