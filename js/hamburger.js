const hamburger = document.getElementById("hamburger");
const hideItems = document.querySelectorAll(".hide-item");

// Toggle del menú al hacer clic en el botón
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  hideItems.forEach((item) => {
    item.classList.toggle("active");
  });
  hamburger.classList.toggle("clicked");
});

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (e) => {
  const isClickInsideMenu = [...hideItems].some(item => item.contains(e.target));
  const isClickOnHamburger = hamburger.contains(e.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hideItems.forEach((item) => {
      item.classList.remove("active");
    });
    hamburger.classList.remove("clicked");
  }
});

// Cerrar menú al hacer clic en un enlace del menú
hideItems.forEach((item) => {
  item.addEventListener("click", () => {
    hideItems.forEach((el) => el.classList.remove("active"));
    hamburger.classList.remove("clicked");
  });
});
