// Selección de elementos del DOM
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const navEnlaces = document.querySelectorAll('.nav-enlace');

// Alternar visualización del menú móvil (Hamburguesa)
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('activo');
    navMenu.classList.toggle('activo');
});

// Cerrar el menú automáticamente al hacer clic en un enlace (Efecto SPA)
navEnlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuToggle.classList.remove('activo');
        navMenu.classList.remove('activo');
    });
});