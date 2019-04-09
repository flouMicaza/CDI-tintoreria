function switchDisponibilidad(elemento) {
  console.log("switch: ", elemento.childNodes[0].checked);
  if (elemento.childNodes[0].checked) {
    elemento.childNodes[1].innerText = "Disponible";
    elemento.offsetParent.className = "col-2 columna disponible";
  } else {
    elemento.childNodes[1].innerText = "No Disponible";
    elemento.offsetParent.className = "col-2 columna no-disponible";
  }
}

function editarStock(elemento) {
  console.log("editando " + elemento);
  agregarInputCantidad(elemento);
  agregarInputNombre(elemento);
  agregarInputPrecio(elemento);
  agregarSwitchDisponibilidad(elemento);
  var botonesOpciones = document.getElementById("opciones-" + elemento);
  botonesOpciones.childNodes[1].src = "../assets/img/check.svg";
  botonesOpciones.childNodes[1].onclick = guardarCambios;
}

function agregarSwitchDisponibilidad(elemento) {
  var divDisponible = document.getElementById("disponible-" + elemento);
  var estadoDisponibilidad = divDisponible.innerText;

  if (estadoDisponibilidad == "Disponible") {
    var switchHtml = crearSwitch(elemento, "checked");
    switchHtml += "Disponible </label> </div>";
    console.log("Disponible");
  } else {
    var switchHtml = crearSwitch(elemento, "");
    switchHtml += "No Disponible </label> </div>";
    console.log("No disponible");
  }

  divDisponible.innerHTML = switchHtml;
}

function crearSwitch(elemento, checked) {
  var switchHtml = '<div class="custom-control custom-switch" id = "switch';
  switchHtml += elemento;
  switchHtml += '" onclick = "switchDisponibilidad(this);">';
  switchHtml += '<input type="checkbox" class="custom-control-input"';
  switchHtml += checked;
  switchHtml += ' id="activacion';
  switchHtml += elemento;
  switchHtml += '" />';
  switchHtml += '<label class="custom-control-label" for="activacion';
  switchHtml += elemento;
  switchHtml += '">';
  return switchHtml;
}

function agregarInputPrecio(elemento) {
  var divPrecio = document.getElementById("precio-" + elemento);
  var precio = divPrecio.childNodes[0].nodeValue;
  precio = precio.trim();
  precio = precio.replace("€", "");
  divPrecio.childNodes[0].remove();
  divPrecio.innerHTML =
    "<input class='form-control' type='text' style='margin:5px' required>";
  divPrecio.childNodes[0].value = precio;
}

function agregarInputCantidad(elemento) {
  var divCantidad = document.getElementById("cantidad-" + elemento);
  var cantidad = divCantidad.childNodes[0].nodeValue;
  divCantidad.childNodes[0].remove();
  divCantidad.innerHTML =
    "<input class='form-control' type='text' style='margin:5px' required>";
  divCantidad.childNodes[0].value = cantidad;
}
function agregarInputNombre(elemento) {
  var divNombre = document.getElementById("nombre-" + elemento);
  var productName = divNombre.childNodes[0].nodeValue;
  divNombre.childNodes[0].remove();
  divNombre.innerHTML =
    "<input class='form-control' type='text' style='margin:5px' required>";
  divNombre.childNodes[0].value = productName;
}

function guardarCambios(elemento) {
  console.log("guardando cambios!");
}
