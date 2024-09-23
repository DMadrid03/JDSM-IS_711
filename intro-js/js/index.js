
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
    //!mostraría error de referencia //! console.log(rtn)