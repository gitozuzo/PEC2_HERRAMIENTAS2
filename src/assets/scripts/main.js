document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".participant-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      // Botones activos visualmente
      filterButtons.forEach((btn) =>
        btn.classList.remove("btn-success", "btn-outline-secondary")
      );
      button.classList.add("btn-success");

      // Mostrar/Ocultar tarjetas según filtro
      cards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "todos" || filter === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
