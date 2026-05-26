// ==========================================
// 1. DATA (ESTRUCTURA DE DATOS)
// ==========================================
const habilidadesTecnicas = [
    "Python (Lógica)", "Java (POO)", "HTML5 / CSS3", "Git / GitHub", "Bases de Datos / SQL", "Linux Mint"
];

const habilidadesBlandas = [
    "Lógica de Programación", "Resolución de Problemas", "Aprendizaje Rápido", "Atención al Detalle", "Constancia"
];

const proyectos = [
    {
        id: "sistema-de-riego",
        icono: "🌱",
        titulo: "sistema-de-riego",
        desc: "Aplicación lógica estructurada en Python para el control automatizado de sensores de humedad con un enfoque modular.",
        techs: ["Python", "OOP", "Logic"]
    },
    {
        id: "biblioteca-cuam",
        icono: "📚",
        titulo: "BIBLIOTECA_CUAM",
        desc: "Sistema desarrollado para la gestión, registro y control de libros, usuarios y préstamos de una biblioteca académica.",
        techs: ["Software", "Bases de Datos", "Estructura"]
    },
    {
        id: "herbarium-digital",
        icono: "🌿",
        titulo: "herbarium-digital",
        desc: "Plataforma digital interactiva diseñada para la catalogación, búsqueda y estudio de diversas especies vegetales y plantas.",
        techs: ["Frontend", "Web App", "Catalog"]
    },
    {
        id: "tienda-copa",
        icono: "🏆",
        titulo: "tienda-coleccion-copa",
        desc: "Diseño conceptual e interfaz de una tienda virtual dedicada a la exhibición y gestión de artículos de colección de copas.",
        techs: ["HTML5", "CSS3", "E-Commerce"]
    }
];

// ==========================================
// 2. COMPONENTES REUTILIZABLES (FUNCIONES)
// ==========================================

// Componente para las etiquetas de habilidades
function CrearSkillTag(nombre) {
    return `<span class="skill-tag">${nombre}</span>`;
}

// Componente tarjeta de proyecto reutilizable
function CrearTarjetaProyecto(proyecto) {
    // Mapeamos las sub-etiquetas del proyecto
    const tagsHTML = proyecto.techs.map(t => `<span class="proyecto-tech-tag">${t}</span>`).join('');
    
    return `
        <article class="proyecto-tarjeta">
            <div class="proyecto-img-placeholder">${proyecto.icono}</div>
            <div class="proyecto-info">
                <h3 class="proyecto-titulo">${proyecto.titulo}</h3>
                <p class="proyecto-desc">${proyecto.desc}</p>
                <div class="proyecto-techs">${tagsHTML}</div>
                <a href="https://github.com/ana2025-alt/${proyecto.titulo}" class="proyecto-link" target="_blank" rel="noopener">Ver Código</a>
            </div>
        </article>
    `;
}

// ==========================================
// 3. RENDERIZADO DINÁMICO EN EL DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Llenar Habilidades
    document.getElementById('lista-tecnologias').innerHTML = habilidadesTecnicas.map(CrearSkillTag).join('');
    document.getElementById('lista-blandas').innerHTML = habilidadesBlandas.map(CrearSkillTag).join('');

    // Llenar Proyectos de forma dinámica
    document.getElementById('grid-proyectos').innerHTML = proyectos.map(CrearTarjetaProyecto).join('');

    // Lógica del Menú Hamburguesa
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('activo');
        navMenu.classList.toggle('activo');
    });

    document.querySelectorAll('.nav-enlace').forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuToggle.classList.remove('activo');
            navMenu.classList.remove('activo');
        });
    });
}); 