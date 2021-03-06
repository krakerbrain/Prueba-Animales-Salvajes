import Animales from "./Animales.js";

// 1. Crear las clases representadas en el diagrama implementando la herencia indicada.

class Leon extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    let sonido = this.getSonido();
    this.setSonido = "./assets/sounds/Rugido.mp3";
  }
}

class Lobo extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Aullar() {
    let sonido = this.getSonido();
    return "./assets/sounds/Aullido.mp3";
  }
}

class Oso extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Rugir() {
    let sonido = this.getSonido();
    return "./assets/sounds/Rugido.mp3";
  }
}

class Serpiente extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Sisear() {
    let sonido = this.getSonido();
    return "./assets/sounds/Siseo.mp3";
  }
}

class Aguila extends Animales {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Chillar() {
    let sonido = this.getSonido();
    return "./assets/sounds/Chillido.mp3";
  }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
