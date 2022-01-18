'use strict'

// los tres puntos antes de resto de frutas es un rest que se utiliza en caso de recibir mas parametros para la funcion
let listadofrutas = (fruta1,fruta2, ...resto_de_frutas) =>{
    console.log(`fruta 1 : ${fruta1}`);
    console.log(`fruta 2 : ${fruta2}`);
    console.log(` ${resto_de_frutas}`);
}

listadofrutas("naranja", "manzana", "sandia", "pera", "melon", "coco");

let frutas = ["naranja","manzana"];
listadofrutas( ...frutas, "sandia", "pera", "melon", "coco"); // los 3 puntos antes en el llamado a la funcion es cuando hay varios parametros que se desean utilizar primero en la funcion



let texto1 = "bienvenido el curso de JavaScript curso de Victor Robles";

let busqueda1 = texto1.slice(14); // sirve para separar el string a partir del caracter seleccionado
console.log(busqueda1);

let busqueda2 = texto1.replace("JavaScript","Symfony"); // remplaza primer parametro (texto) por el segundo parametro
console.log(busqueda2);

let busqueda3 = texto1.split(" "); // crea un array y lo separa por los espacios
console.log(busqueda3);

let busqueda4 = texto1.trim(); // elimina espacio de string anteriores o posteriores
console.log(busqueda4);

let categorias  = ["accion","terror","comedia"];
let peliculas = ["la verdad duele", "la vida es bella" , "gran torino"];

let cine = [categorias,peliculas];
console.log(cine[0][1]);

peliculas.push("batman"); // push añade al final 
peliculas.reverse(); // da vuelta el array
peliculas.sort(); // ordena el array alfabeticamente
console.log(peliculas);

let peliculas_string = peliculas.join(" "); // transforma los array en string 
console.log(peliculas_string)

let cadena = "texto1 , texto2 , texto 3";
let arrcadena = cadena.split(", "); // puede transformar de string a array
console.log(arrcadena)

// ejercicios array

let numeros = [];

for (let i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt("introduce un numero",0));
    document.write(`numero ingresado : ${numeros[i]} <br>`)
}
console.log(numeros)
let ordenado = numeros.sort();
document.write(`<h3>los numeros ordenados: ${ordenado}</h3>`)

let invertido = numeros.reverse();
document.write(`<h3>los numeros invertidos: ${invertido}</h3>`)

let cantidad = numeros.length;
document.write(`<h3>cantidad de elementos: ${cantidad}</h3>`)


let busqueda = parseInt(prompt("introduce un numero",0));

let posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h3>Encontrado</h3><br>")
    document.write(`<h3>posicion de la busqueda : ${posicion}</h3><br>`)
}else{
    document.write("<h3>No encontrado</h3>")
}







