import Animales from "./clases/Animales.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Sonidos.js";
import animales from "./Consulta.js";

let mostrarAnimales = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {
  let imagenBg = document.getElementById("preview");
  let imagenSrcBg = imagenBg.style.backgroundImage;
  let imagenSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);

  let nombreAnimal = document.getElementById("animal").value;
  let edadAnimal = document.getElementById("edad").value;
  let coment = document.getElementById("comentarios").value;
  let sonidoA = document.getElementById("player").getAttribute("src");

  let nuevoAnimal;
  // 1. Se crearon las clases en módulos aparte. La clase principal se llama Animales.js
  // y la correspondiente a los sonidos se llama Sonidos.js

  // 2. Crear las instancias de las clases utilizando los datos del formulario

  if (nombreAnimal == "Leon") {
    nuevoAnimal = new Leon(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Lobo") {
    nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Oso") {
    nuevoAnimal = new Oso(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Serpiente") {
    nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  } else if (nombreAnimal == "Aguila") {
    nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, imagenSrc, coment, sonidoA);
  }

  //   7. Validar que el usuario haya asignado todos los datos del animal antes de que éste
  // sea agregado a la tabla
  // 8. Devolver el formulario en un estado inicial luego de registrar a cada animal.

  if (nombreAnimal && edadAnimal && imagenSrc && coment) {
    document.getElementById("animal").selectedIndex = 0;
    document.getElementById("edad").selectedIndex = 0;
    document.getElementById("comentarios").value = "";
    imagenBg.style.backgroundImage = "none";

    mostrarAnimales.push(nuevoAnimal);
    reloadTable();

    console.log(nuevoAnimal);
  } else {
    alert("Debe ingresar todos los datos");
  }
});

// 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados
// con el formulario.

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");
  // 9. Programar la interacción del botón de audio, en donde deberás reproducir el sonido
  // del animal en el sitio web. (Esto lo trabajé pero no lo logré. Suena automático)

  //   10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su
  // imagen.

  animalesTemplate.innerHTML = "";
  mostrarAnimales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
        <div class="card m-3" style="width: 15rem">
        <img id="nuevaImagen"src="${p.getImg()}" class="card-img-top" style="max-width: 15rem" data-toggle="modal" data-target="#${i}exampleModal" />
        
        <div class="card-body">
          <button href="#" id="btnAudio" class="btn btn-primary" ><i class="fas fa-volume-up"></i></button>
          <audio autoplay id="${i}player2" src="${p.getSonido()}" class="d-none"></audio>
          </div>
        
        <!-- Modal -->
        <div class="modal fade" id="${i}exampleModal">
        <div class="modal-dialog modal-dialog-centered w-25" role="document">
          <div class="modal-content bg-dark">
                   <div class="modal-body">
              <div class="text-center text-light mx-3">
                          <img width="300" src="${p.getImg()}"/>
                          <p>${p.getEdad()}</p>
                          <p>Comentarios</p>
                          <p>${p.getComentarios()}</p>
                          
                     </div>
              </div>
            </div>
          </div>
        </div>
        `;
  });
};
