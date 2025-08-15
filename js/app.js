
// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("entrar-btn");

  if (boton) {
    boton.addEventListener("click", () => {
      // Oculta la sección de introducción
      document.getElementById("intro").classList.add("hidden");
      // Muestra la sección principal
      document.getElementById("mainApp").classList.remove("hidden");
      console.log("Entrando a la Liga...");
    });
  }
});
