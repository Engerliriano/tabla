const filas = 5;
const columnas = 3;
//sirve para aplicar los colores a la tabla
function aplicarColor(color, valor) {
  const dtp = document.getElementById("sp_" + color);
  dtp.innerHTML = valor;
}

//Columnas y filas de la tabla
function dibujartabla() {
  destino = document.getElementById("tc");

  for (x = 0; x < filas; x++) {
    tr = document.createElement("tr");
    for (y = 0; y < columnas; y++) {
      td = document.createElement("td");
      input = document.createElement("input");
      input.setAttribute("onkeyup", "verificarcolor()");
      input.setAttribute("name", "colores");
      td.appendChild(input);
      tr.appendChild(td);
    }
    destino.appendChild(tr);
  }
}

let n_rojo = 0;
let n_verde = 0;
let n_azul = 0;

function verificarcolor() {
  inputs = document.getElementsByName("colores");

  n_rojo = 0;
  n_verde = 0;
  n_azul = 0;
  for (let x = 0; x < filas * columnas; x++) {
    inp = inputs[x];
    texto = inp.value.trim().toUpperCase();

    inp.setAttribute("class", "");
    if (texto == "ROJO") {
      inp.setAttribute("class", "white-text #b71c1c red darken-4");
      n_rojo++;
    } else if (texto == "VERDE") {
      inp.setAttribute("class", "white-text #388e3c green darken-2");
      n_verde++;
    } else if (texto == "AZUL") {
      inp.setAttribute("class", "white-text #1976d2 blue darken-2");
      n_azul++;
    }
  }

  aplicarColor("rojo", n_rojo);
  aplicarColor("verde", n_verde);
  aplicarColor("azul", n_azul);

  myChart.data.datasets[0].data[0] = n_rojo;
  myChart.data.datasets[0].data[1] = n_azul;
  myChart.data.datasets[0].data[2] = n_verde;
  myChart.update();
}