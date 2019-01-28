class persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    soyAlto() {
        if (this.altura>=SET_POINT_ALTURA) {
            console.log('Soy una persona alta');
        }
        else {
            console.log('Soy una persona baja');
        }
    }
    saludar() {
        console.log(`hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
}

const SET_POINT_ALTURA = 1.8

const medirAltura = altura => altura >= SET_POINT_ALTURA


let camilo = new persona ('Camilo', 'Garcia', 1.8)

function Personas(nombre, apellido, altura)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.altura = altura;
}

Personas.prototype.soyAlto = function(){
    return this.altura > 1.6
};

Personas.prototype.saludar = function(){
	console.log(`Hola mi nombre es ${this.nombre}${this.apellido}`);
};

var person = new Personas('wilson', 'vasquez', 1.80);
var rosita = new Personas('rosita', 'celis', 1.65);