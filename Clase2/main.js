/*
let saludo = "hola"
let nombre = "Tabito"

console.log (`Hola ${saludo}, saludos a ${nombre}`)
*/

class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        return (`${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        let cantidadMascotas = this.mascotas.length;
        console.log (cantidadMascotas)
    }

    addBook(nombre, autor){
        let libroNuevo = {nombre: nombre, autor: autor};
        this.libros.push(libroNuevo); 
        //console.log(this.libros);
    }

    getBookNames(){
        let nombres = this.libros.map((nom) => {return nom.nombre} )
        //console.log(nombres)
        return nombres
    }

};


let persona = new Usuario('Tabi','Bito');
//let persona2 = new Usuario('Tabii','Bito2');
const nombrePersona = persona.getFullName();
//console.log(nombrePersona)

let nuevaMascota = 'Perro';
let otraMascota = 'Gato';
let nombreCompleto = persona.getFullName();
console.log(nombreCompleto)
persona.addMascota(nuevaMascota);
persona.addMascota(otraMascota);
//persona2.addMascota(otraMascota);

persona.countMascotas();
//persona2.countMascotas();

persona.addBook("La biblia de los caidos", "Fernando Trujillo S.");
persona.addBook("La biblia de los caidos 2", "Fernando Trujillo S.");


let libros = persona.getBookNames();
console.log (libros)



