
let juegos;

async function cargarDatos() {
  const response = await fetch("../data/data.json");
  juegos = await response.json();
  mostrarPorPantalla(juegos);
  //juegos.forEach(insertarCard);
}

cargarDatos()

// FORMATO GENÉRICO DE LA FUNCIÓN CARGARDATOS CON MANEJO DE ERRORES.
// function cargarDatos() {
//   return fetch("./resources/data/data.json")
//     .then((resolve) => {
//       return resolve.json();
//     })
//     .then((json) => {
//       mostrarPorPantalla(json)
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

function mostrarPorPantalla(juegos) {
  const juegosFiltradosPorDescargas = juegos.filter((objeto) => objeto.descargas > 0);
  juegosFiltradosPorDescargas.forEach(insertarCard);
}
  
  // OPCIONES CON OTROS FILTROS APLICABLES
  //--------------------------------------------------------------------------
  // const juegosFiltradosPorPrecio = juegos.filter( objeto => {
  //   return objeto.precio > 2
  // });
  //const juegosFiltradosPorPrecio = juegos.filter((objeto) => objeto.precio > 2);
  //juegosFiltradosPorPrecio.forEach(insertarCard);
  // console.log(juegosFiltradosPorPrecio);
  //--------------------------------------------------------------------------
  // const encontrarJuego = juegos.find((juego) => {
  //   return juego.nombre === "Assesin Creed";
  // });
  //const encontrarJuego = juegos.find((juego) => juego.nombre === "Assesin Creed");
  // console.log(encontrarjuego);
  // juegos.forEach(insertarCard);
  //--------------------------------------------------------------------------
