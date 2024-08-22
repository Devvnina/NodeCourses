const ANIMAL = {
    name : "caballo"
}
ANIMAL.dos = "Morsa";
// ANIMAL = [];
console.log(ANIMAL);


let nombre = "Erika Padron";
let edad = 24;
let zapatos = 1500;
let series = ["Blacklist", "GOT", "Vikings", "Raised by wolves"]
let peliculas = [
    {
        titulo: "Personal assistant",
        year: 2020,
        protagonista: "Nisha Ganatra",
        duracion: 120
    },
    {
        titulo: "Wonder Woman 1984",
        year: 2018,
        protagonista: "Gal Gadot",
        duracion: 101
    },
    {
        titulo: "Back to the future",
        year: 1985,
        protagonista: "Marti McFly",
        duracion: 160
    },
    {
        título: "Titanic",
        año: 1997,
        protagonista : "Leonardo di caprio",
        duracion: "84 años"

    },
    {
        titulo: "Matrix",
        year: "1999",
        protagonist: "Keanu Reeves",
        duracion:"136 minutos"
    }
]
console.log(`NOMBRE -> ${nombre}`);
console.log(`EDAD -> ${edad}`);
console.log(`EDAD +1 -> ${edad + 1}`);
console.log(`ZAPATOS -> ${zapatos}`);
console.log(`SERIES -> ${series}`);
console.log(`PELICULAS -> `, peliculas, peliculas.length);

let new_peli = 
    {
        titulo: "El juego del calamar",
        year: 2021,
        protagonista: "Lee-Jung Jae",
        duracion: 120
    }
    peliculas.push(new_peli);

    console.log(`PELICULAS mas uno -> `, peliculas, peliculas.length);