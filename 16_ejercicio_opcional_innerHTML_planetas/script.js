let sistemaSolar = {
  mercurio: {
    nombre: "mercurio",
    color: "gris",
    temperatura: 350,
    imagen:
      "https://www.nationalgeographic.com.es/medio/2022/07/31/el-planeta-mercurio_c7bafef8_1280x720.jpg",
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
    imagen: "https://s1.significados.com/foto/earth-11015-1920-41.jpg",
  },
  marte: {
    nombre: "marte",
    color: "rojo",
    temperatura: -46,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/800px-Schiaparelli_Hemisphere_Enhanced.jpg",
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
      "https://www.ngenespanol.com/wp-content/uploads/2023/06/saturno-asi-es-el-planeta-menos-denso-del-sistema-solar-770x431.jpg",
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
    nombre: "pluton",
    color: "blanco",
    temperatura: -229,
    imagen:
      "https://services.meteored.com/img/article/por-que-pluton-no-vuelve-a-ser-un-planeta-del-sistema-solar-1678010527599_1024.jpg",
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

let selec1;
let selec2;
let selec3;
let selecs = [selec1, selec2, selec3];

respuestas[0] = prompt("Escribe el nombre de un planeta:");
do {
  for (let i = 0; i < 9; i++) {
    if (respuestas[0] == names[i]) {
      selecs[0] = respuestas[0];
    }
  }
  if (selecs[0] != respuestas[0]) {
    respuestas[0] = prompt("Incorrecto. Prueba de nuevo:");
  }
} while (respuestas[0] != selecs[0]);

respuestas[1] = prompt("Escribe el nombre otro planeta:");

do {
  if (respuestas[1] == selecs[0]) {
    respuestas[1] = prompt("Repetido. Escribe otro planeta:");
  }

  do {
    for (let i = 0; i < 9; i++) {
      if (respuestas[1] == names[i]) {
        selecs[1] = respuestas[1];
      }
    }
    if (selecs[1] != respuestas[1]) {
      respuestas[1] = prompt("Incorrecto. Prueba de nuevo:");
    }
  } while (respuestas[1] != selecs[1]);
} while (respuestas[1] == selecs[0]);

respuestas[2] = prompt("Escribe el nombre del último planeta:");

do {
  if (respuestas[2] == selecs[0]) {
    respuestas[2] = prompt("Repetido. Escribe otro planeta:");
  }
  do {
    if (respuestas[2] == selecs[1]) {
      respuestas[2] = prompt("Repetido. Escribe otro planeta:");
    }
    do {
      for (let i = 0; i < 9; i++) {
        if (respuestas[2] == names[i]) {
          selecs[2] = respuestas[2];
        }
      }
      if (selecs[2] != respuestas[2]) {
        respuestas[2] = prompt("Incorrecto. Prueba de nuevo:");
      }
    } while (respuestas[2] != selecs[2]);
  } while (respuestas[2] == selecs[1]);
} while (respuestas[2] == selecs[0]);

document.querySelector("body").innerHTML = `
  <div id="main" style="display: flex; justify-content: space-around;">
    <div id="block1" style="background-color: blue; display: flex; flex-direction: column;justify-content: center; align-items: center;">
    <h1> ${sistemaSolar[selecs[0]].nombre}</h1>
    <img width="350px" src="${sistemaSolar[selecs[0]].imagen}"/>
    <h2> ${sistemaSolar[selecs[0]].color}</h2>
    <h2> ${sistemaSolar[selecs[0]].temperatura}</h2>
    </div>
    
    <div id="block2" style="background-color: red; display: flex; flex-direction: column;justify-content: center; align-items: center;">
    <h1> ${sistemaSolar[selecs[1]].nombre}</h1>
    <img width="350px" src="${sistemaSolar[selecs[1]].imagen}"/>
    <h2> ${sistemaSolar[selecs[1]].color}</h2>
    <h2> ${sistemaSolar[selecs[1]].temperatura}</h2>
    
    </div><div id="block3" style="background-color: green; display: flex; flex-direction: column;justify-content: center; align-items: center;">
    <h1> ${sistemaSolar[selecs[2]].nombre}</h1>
    <img width="350px" src="${sistemaSolar[selecs[2]].imagen}"/>
    <h2> ${sistemaSolar[selecs[2]].color}</h2>
    <h2> ${sistemaSolar[selecs[2]].temperatura}</h2>
    </div>
  </div>
  `;
