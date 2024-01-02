let sistemaSolar = {
  mercurio: {
    nombre: "mercurio",
    color: "gris",
    temperatura: 350,
    imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg",
  },
  venus: {
    nombre: "venus",
    color: "blanco",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  tierra: {
    nombre: "tierra",
    color: "morado",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  marte: {
    nombre: "marte",
    color: "rojo",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  jupiter: {
    nombre: "jupiter",
    color: "marrón",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  saturno: {
    nombre: "saturno",
    color: "amarillo",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  urano: {
    nombre: "urano",
    color: "azul",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  neptuno: {
    nombre: "neptuno",
    color: "azul",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  pluton: {
    nombre: "plutón",
    color: "blanco",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
};

let name1 = sistemaSolar.mercurio.nombre;
let name2 = sistemaSolar.venus.nombre;
let name3 = sistemaSolar.tierra.nombre;
let name4 = sistemaSolar.marte.nombre;
let name5 = sistemaSolar.jupiter.nombre;
let name6 = sistemaSolar.saturno.nombre;
let name7 = sistemaSolar.urano.nombre;
let name8 = sistemaSolar.neptuno.nombre;
let name9 = sistemaSolar.pluton.nombre;

let names = [name1, name2, name3, name4, name5, name6, name7, name8, name9];
let respuesta1;
let respuesta2;
let respuesta3;
let respuestas = [respuesta1, respuesta2, respuesta3];
let num = 0;

let selec1;
let selec2;
let selec3;
let selecs = [selec1, selec2, selec3];

respuesta1 = prompt("Escribe el nombre de un planeta:");
do {
  for (let i = 0; i < 9; i++) {
    if (respuesta1 == names[i]) {
      selec1 = respuesta1;
    }
  }
  respuesta1 = prompt("Incorrecto. Prueba de nuevo:");
} while (respuesta1 != selec1);

console.log(selec1);
console.log(respuesta1);
