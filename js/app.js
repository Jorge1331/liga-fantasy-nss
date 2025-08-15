// Esta función se ejecuta cuando el usuario hace clic en el botón "Entrar a la Liga"
function startApp() {
  // Oculta la sección de introducción (pantalla de bienvenida)
  document.getElementById('intro').classList.add('hidden');

  // Muestra la sección principal con el contenido de la Liga
  document.getElementById('mainApp').classList.remove('hidden');
}
