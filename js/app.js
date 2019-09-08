// Instanciar ambas clases

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.showShops();
})

// Habilitar búsqueda en vivo.

const finder = document.querySelector('#buscar input');

finder.addEventListener('input', () => {
  // Si es mayor a 5, buscar sugerencias
  if(finder.value.length > 3) {
      // Obtener sugerencias que sean parte de la busqueda
      ui.getSuggest(finder.value);
  } else if(finder.value.length === 0) {
      // Mostrar los pines
      ui.showShops();
  }
});