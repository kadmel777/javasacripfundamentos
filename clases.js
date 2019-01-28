const SET_POINT_ALTURA = 1.8

const medirAltura = altura => altura >= SET_POINT_ALTURA


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



let camilo = new persona ('Camilo', 'Garcia', 1.8)