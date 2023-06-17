const data = {
  labels: ["Rojo", "Verde", "Azul"],
  datasets: [
    {
      label: "Colores",
      data: [n_rojo, n_verde, n_azul],
      backgroundColor: [
        "rgb(255, 0, 0)",
        "rgb(70, 130, 180)",
        "rgb(0, 150, 0)",
      ],
    },
  ],
};
const config = {
  type: "pie",
  data: data,
};

var myChart = new Chart(document.getElementById("myChart"), config);