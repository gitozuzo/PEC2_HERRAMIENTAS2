const ctx = document.getElementById("impactChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Participantes",
        data: [300, 380, 450, 520],
        borderColor: "#4CAF50",
        fill: false,
      },
      {
        label: "Proyectos Implementados",
        data: [20, 35, 50, 65],
        borderColor: "#03A9F4",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
