function switchDisponibilidad(elemento) {
  if (elemento.childNodes[1].checked) {
    elemento.childNodes[3].innerText = "Disponible";
    elemento.offsetParent.className = "col-2 columna disponible";
  } else {
    elemento.childNodes[3].innerText = "No Disponible";
    elemento.offsetParent.className = "col-2 columna no-disponible";
  }
  console.log(elemento);
}

function editarStock(elemento) {
  console.log("editando " + elemento);
  agregarInputCantidad(elemento);
  agregarInputNombre(elemento);

  var botonesOpciones = document.getElementById("opciones-" + elemento);
  console.log(botonesOpciones.childNodes[1]);
  botonesOpciones.childNodes[1].src = "../assets/img/check.svg";
  botonesOpciones.childNodes[1].onclick = guardarCambios;
}

function agregarInputCantidad(elemento) {
  console.log("ahora hay un input wii");
  var divCantidad = document.getElementById("cantidad-" + elemento);
  var cantidad = divCantidad.childNodes[0].nodeValue;
  divCantidad.childNodes[0].remove();
  divCantidad.innerHTML =
    "<input class='form-control' type='text' style='margin:5px'>";
  divCantidad.childNodes[0].value = cantidad;
}
function agregarInputNombre(elemento) {
  var divNombre = document.getElementById("nombre-" + elemento);
  var productName = divNombre.childNodes[0].nodeValue;
  divNombre.childNodes[0].remove();
  divNombre.innerHTML =
    "<input class='form-control' type='text' style='margin:5px'>";
  divNombre.childNodes[0].value = productName;
}

function guardarCambios() {
  console.log("guardando cambios!");
}
