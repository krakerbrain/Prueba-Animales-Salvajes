// 4. Realizar por lo menos una función autoejecutable IIFE.

let animales = (() => {
  const url = "http://127.0.0.1:5500/animales.json";
  const getData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  return { getData };
})();

export default animales;

// 5. Dividir el código en módulos. Se crearon 4 módulos. 2 dedicados a las clases y
// dos más, uno dedicado a la consulta del jason (Consulta.js) y otro dedicada al
// async / await para obtener las imagenes y tambien obtuve el sonido
