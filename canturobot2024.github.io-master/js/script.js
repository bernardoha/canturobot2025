const popup = document.getElementById('popup');
const closePopup = document.querySelector('.close');

// Mostrar el popup al cargar la página
window.onload = () => {
    popup.style.display = 'block';
};

closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Ocultar el popup
});

// Cerrar el popup al hacer clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
