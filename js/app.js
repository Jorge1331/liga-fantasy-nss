// Esperamos a que todo el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Buscamos el botón por su ID
  const boton = document.getElementById("entrar-btn");

  // Si encontramos el botón, le añadimos el evento
  if (boton) {
    boton.addEventListener("click", () => {
      console.log("Botón clicado"); // Para pruebas
      document.getElementById("intro").classList.add("hidden");
      document.getElementById("mainApp").classList.remove("hidden");
    });
  }
});
