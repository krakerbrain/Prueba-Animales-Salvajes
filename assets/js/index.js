import Animales from "./clases/Animales.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Sonidos.js";
import animales from "./Consulta.js";

let mostrarAnimales = [];

document.getElementById("preview").addEventListener("click", () => {
  let imagenBg = document.getElementById("preview");
  let imagenSrcBg = imagenBg.style.backgroundImage;
  let imagenSrc = imagenSrcBg.slice(5, imagenSrcBg.length - 2);

  let nombreAnimal = document.getElementById("animal").value;
  let edadAnimal = document.getElementById("edad").value;
  let coment = document.getElementById("comentarios").value;

  let nuevoAnimal;
  // 1. Se crearon las clases en módulos aparte. La clase principal se llama Animales.js
  // y la correspondiente a los sonidos se llama Sonidos.js

  // 2. Crear las instancias de las clases utilizando los datos del formulario

  if (nombreAnimal == "Leon") {
    nuevoAnimal = new Leon(nombreAnimal, edadAnimal, imagenSrc, coment);
  } else if (nombreAnimal == "Lobo") {
    nuevoAnimal = new Lobo(nombreAnimal, edadAnimal, imagenSrc, coment);
  } else if (nombreAnimal == "Oso") {
    nuevoAnimal = new Oso(nombreAnimal, edadAnimal, imagenSrc, coment);
  } else if (nombreAnimal == "Serpiente") {
    nuevoAnimal = new Serpiente(nombreAnimal, edadAnimal, imagenSrc, coment);
  } else if (nombreAnimal == "Aguila") {
    nuevoAnimal = new Aguila(nombreAnimal, edadAnimal, imagenSrc, coment);
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
  } else {
    alert("Faltan Datos");
  }
});

// 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados
// con el formulario.

const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales");

  //   10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su
  // imagen. Esto no se logró de forma eficiente ya que no se muestra en el orden debido y
  // se repiten los modales

  animalesTemplate.innerHTML = "";
  mostrarAnimales.forEach((p, i) => {
    animalesTemplate.innerHTML += `
        <div class="card m-3" style="width: 15rem">
        <img id="nuevaImagen"src="${p.getImg()}" class="card-img-top" style="max-width: 15rem" data-toggle="modal" data-target="#exampleModal" />
        <div class="card-body">
          <button href="#" id="btnAudio" class="btn btn-primary" onclick=""><i class="fas fa-volume-up"></i></button>
        </div>
        `;

    document.getElementById("nuevaImagen").addEventListener("click", () => {
      const modal = document.querySelector(".modal-body");
      modal.innerHTML = `
                <div class="text-center text-light mx-3">
                <img width="300" src="${p.getImg()}"/>
                <p>${p.getEdad()}</p>
                <p>Comentarios</p>
                <p>${p.getComentarios()}</p>
               
                </div>
                 `;
      console.log(modal);
    });
  });
  // 9. Programar la interacción del botón de audio, en donde deberás reproducir el sonido
  // del animal en el sitio web. (Esto lo trabajé pero no lo logré porque solo suena la primera vez)

  let boton = document.querySelector("#btnAudio");
  let audioEtiqueta = document.querySelector("#player");

  $(document).ready(function () {
    $("#btnAudio").on("click", function () {
      audioEtiqueta.play();
      console.log(`Reproduciendo: ${audioEtiqueta.src}`);

      alert("The sound was clicked.");
    });
  });
};
