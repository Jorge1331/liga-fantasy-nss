// Esperar a que todo el HTML se haya cargado antes de asignar funciones
document.addEventListener("DOMContentLoaded", () => {
  // Buscar el botón por su ID o su clase
  const boton = document.querySelector("button[onclick='startApp()']");
  
  // Si el botón existe, le asignamos el evento manualmente
  if (boton) {
    boton.addEventListener("click", () => {
      document.getElementById("intro").classList.add("hidden");
      document.getElementById("mainApp").classList.remove("hidden");
    });
  }
});

console.log("Botón clicado");
