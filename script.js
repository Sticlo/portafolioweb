// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav ul li a");
  
    // Escuchar clics en los enlaces del menú
    menuLinks.forEach(function (link) { 
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
  
          // Cerrar el menú en dispositivos móviles después de hacer clic en un enlace
          const nav = document.querySelector("nav");
          nav.classList.remove("active"); // Si tienes una clase "active" para el menú desplegable
        }
      });
    });
  
    // Escuchar clics en los botones de la sección de inicio (hero)
    const btnVerProyectos = document.querySelector(
      'section#inicio .buttons .button[href="#proyectos"]'
    );
    const btnContactanos = document.querySelector(
      'section#inicio .buttons .button[href="#contactanos"]'
    );
  
    if (btnVerProyectos) {
      btnVerProyectos.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  
    if (btnContactanos) {
      btnContactanos.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  });
  