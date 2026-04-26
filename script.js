// Animación al hacer scroll
const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

secciones.forEach((seccion) => observer.observe(seccion));
// Modo oscuro / claro
const boton = document.getElementById("modo-btn");

boton.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  boton.textContent = document.body.classList.contains("claro") ? "🌙" : "☀️";
});
