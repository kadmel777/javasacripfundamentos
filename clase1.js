console.log("hola mundo")

let nombre = 'camilo'
let apellido = 'garcia'

let nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

 
function finaleter(palabra) {
    var letrafinal = palabra.charAt(palabra.length -1)
    return letrafinal
}

let camilo = {
    nombre : 'camilo',
    edad : 27
}

let carlos = {
    nombre : 'carlos',
    edad : 10
}

function nombreEnMayusculas ({nombre}){
    console.log(nombre.toUpperCase())
}

nombreEnMayusculas(camilo)

function imprimirNombreYEdad(persona) {
    var {nombre} = persona
    var {edad} = persona
    console.log(`hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(camilo)

function cumpleaños (persona){
    return{
        ...persona,
        edad : persona.edad + 1 
    }
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD //arrow function

const esMenorDeEdad = persona => !esMayorDeEdad(persona)

function mayorDeEdad (persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }
    else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('ACCESO DENEGADO')
    }
}

const names = ['Ary','Ale','Pelu','Ary','Pelu','Ary','Ale']

const totalNames = names.reduce((contador, name) => {
    contador[name] = (contador[name] || 0 ) + 1
  return contador
}, {})

