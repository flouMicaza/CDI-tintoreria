function switchDisponibilidad(elemento) {
  var elementoId = elemento.id.split("-")[1];
  var disponibleLabel = document.getElementById(
    "disponibleLabel-" + elementoId
  );
  if (elemento.childNodes[1].checked) {
    elemento.childNodes[3].innerText = "Disponible";
    elemento.offsetParent.className = "col-3 columna disponible";
    disponibleLabel.innerHTML = "Disponible";
    disponibleLabel.className = "col-3 columna disponible";
  } else {
    elemento.childNodes[3].innerText = "No Disponible";
    elemento.offsetParent.className = "col-3 columna no-disponible";
    disponibleLabel.innerHTML = "No Disponible";
    disponibleLabel.className = "col-3 columna no-disponible";
  }
}

function editarStock(elementoId) {
  var rowElemento = document.getElementById("rowLabel" + elementoId);
  rowElemento.style = "display: none";
  var rowEditable = document.getElementById("rowInput" + elementoId);
  rowEditable.style = "";
}

function confirmarStock(elementoId) {
  var rowElemento = document.getElementById("rowLabel" + elementoId);
  rowElemento.style = "";
  var rowEditable = document.getElementById("rowInput" + elementoId);
  rowEditable.style = "display: none";
  guardarCambios(elementoId);
}

function guardarCambios(elementoId) {
  cambiarValor(elementoId, "cantidad");
  cambiarValor(elementoId, "nombre");
  cambiarValor(elementoId, "precio");
}
function cambiarValor(elementoId, tipo) {
  var cantidadLabel = document.getElementById(tipo + "Label-" + elementoId);
  var cantidadInput = document.getElementById(tipo + "Input-" + elementoId);
  cantidad = cantidadInput.lastElementChild.value;
  cantidadLabel.innerText = cantidad;
}
function eliminarElemento(elemento) {
  console.log("eliminando", elemento);
}
