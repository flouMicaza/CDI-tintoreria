function cargarDatosStock() {
  var articulos = JSON.parse(window.localStorage.getItem("articulos"));

  for (var i = 0; i < articulos.articulos.length; i++) {
    agregarArticulo(articulos.articulos[i], i);
  }
}
function crearDivCantidad(num, cantidad) {
  var div_cant = '<div class="col-2 columna" id="cantidadLabel-' + num + '">';
  div_cant += cantidad.toString();
  div_cant += "</div>";
  return div_cant;
}
function crearDivInputCantidad(num, cantidad) {
  var div_cantidad =
    '<div class="col-2 columna" id="cantidadInput-' + num + '">';
  div_cantidad +=
    '<input class="form-control" type="text" style="margin:5px" required value="' +
    cantidad +
    '" /> </div>';
  return div_cantidad;
}

function crearDivPrecio(num, precio) {
  var div_price = '<div class="col-2 columna" id="precioLabel-' + num + '">';
  div_price += precio;
  div_price += "</div>";
  return div_price;
}

function crearDivInputPrecio(num, precio) {
  var div_precio =
    '<div class="col-2 columna" id="precioInput-' +
    num +
    '">\
    <input class="form-control" type = "text" style = "margin:5px" required value = "' +
    precio +
    '"/>\
        </div >';
  return div_precio;
}

function crearDivNombre(num, nombre) {
  var div_nombre = '<div class="col-3 columna" id="nombreLabel-' + num + '">';
  div_nombre += nombre;
  div_nombre += "</div>";
  return div_nombre;
}

function crearDivDisponibilidad(num, disponible) {
  var div_disp;
  if (disponible) {
    div_disp =
      '<div class="col-3 columna disponible" id="disponibleLabel-' + num + '">';
    div_disp += "Disponible";
    div_disp += "</div >";
  } else {
    div_disp =
      '<div class="col-3 columna no-disponible" id="disponibleLabel-' +
      num +
      '">';
    div_disp += "No Disponible";
    div_disp += "</div >";
  }
  return div_disp;
}
function crearDivInputDisponibilidad(num, disponible) {
  var div_switch;

  if (disponible) {
    div_switch =
      '<div class="col-3 columna disponible" id="disponibleInput-' + num + '">';
    div_switch +=
      '<div \
      class="custom-control custom-switch"\
      id="switch-' +
      num +
      '"\
      onclick="switchDisponibilidad(this);"\
      style="margin:10px">';
    div_switch +=
      '<input \
        type="checkbox" \
        checked \
        class="custom-control-input" \
        id="activacion-' +
      num +
      '"/>' +
      '<label class="custom-control-label" for="activacion-' +
      num +
      '"> \
          Disponible \
            </label>';
  } else {
    div_switch =
      '<div class="col-3 columna no-disponible" id="disponibleInput-' +
      num +
      '">';
    div_switch +=
      '<div \
      class="custom-control custom-switch"\
      id="switch-' +
      num +
      '"\
      onclick="switchDisponibilidad(this);"\
      style="margin:10px">';
    div_switch +=
      '<input \
        type="checkbox" \
        class="custom-control-input" \
        id="activacion-' +
      num +
      '"/>' +
      '<label class="custom-control-label" for="activacion-' +
      num +
      '"> \
          No Disponible \
            </label>';
  }
  div_switch += "</div></div>";
  return div_switch;
}

function crearDivOpciones(num, tipo) {
  var div_opciones;
  if (tipo == "Label") {
    div_opciones =
      '<div class="col-2 columna opciones" id="opcionesLabel-' + num + '">';
    div_opciones += '<button id="editarLabel-' + num + '" class="btn"';
    div_opciones += "onclick=\"editarStock('" + num + "')\">";

    div_opciones +=
      '<img type="image" src="../assets/img/svg/pencil.svg"\
     width="30" height="30" id="editarLabel-' +
      num +
      '"; />';
    div_opciones += "</button>";
  } else {
    div_opciones =
      '<div class="col-2 columna opciones" id="opcionesInput-' + num + '">';
    div_opciones += '<button id="editarInput-' + num + '" class="btn"';
    div_opciones += "onclick=\"confirmarStock('" + num + "')\">";
    div_opciones +=
      '<img type="image" src="../assets/img/svg/check.svg"\
     width="30" height="30" id="editarInput-' +
      num +
      '"; />';
    div_opciones += "</button>";
  }

  div_opciones += '<button id="eliminar' + tipo + "-" + num + '" class="btn">';
  div_opciones +=
    '<img type="image" src="../assets/img/svg/trashcan.svg"\
     width="30" height="30" data-toggle="modal" data-target="#modalEliminar' +
    tipo +
    "-";
  div_opciones += num;
  div_opciones += '"/> </button></div>';
  return div_opciones;
}

function crearModal(num, nombre, tipo) {
  var div_modal =
    '<div \
    class="modal fade" \
    id="modalEliminar' +
    tipo +
    "-" +
    num +
    '" \
    role="dialog" \
    aria-labelledby="modalRegistro' +
    tipo +
    '" \
    aria-hidden="true" \
  > \
    <div class="modal-dialog" role="document"> \
      <div class="modal-content"> \
        <div class="modal-header"> \
          <h5 class="modal-title" id="modalRegistro' +
    tipo +
    num +
    '">\
            Eliminar producto\
                </h5>\
          <button\
            type="button"\
            class="close"\
            data-dismiss="modal"\
            aria-label="Close"\
          >\
            <span aria-hidden="true">&times;</span>\
          </button>\
        </div>\
        <div class="modal-body" id="cuerpoModal' +
    tipo +
    num +
    '">\
          Seguro que desea eliminar el producto "' +
    nombre +
    '"?\
              </div>\
        <div class="modal-footer">\
          <button\
            type="button"\
            class="btn btn-primary"\
            data-dismiss="modal"\
            onclick="eliminarElemento(\'' +
    num +
    '\')"\
          >\
            Aceptar\
                </button>\
          <button\
            type="button"\
            class="btn btn-danger"\
            data-dismiss="modal"\
          >\
            Cancelar\
                </button>\
        </div>\
      </div>\
    </div>\
  </div>';
  return div_modal;
}

function agregarLabels(articulo, num) {
  var cantidad = articulo.stock;
  var nombre = articulo.nombre;
  var precio = articulo.precio;
  var disponible = articulo.disponible;

  var div_row = '<div class="row" id="rowLabel' + num + '">';
  var div_cant = crearDivCantidad(num, cantidad);
  var div_price = crearDivPrecio(num, precio);
  var div_name = crearDivNombre(num, nombre);
  var div_disponibilidad = crearDivDisponibilidad(num, disponible);
  var div_botones = crearDivOpciones(num, "Label");
  var div_modal = crearModal(num, nombre, "Label");
  div_row +=
    div_cant +
    div_name +
    div_price +
    div_disponibilidad +
    div_botones +
    div_modal;
  div_row += "</div>";
  $("#table_body_stock").append(div_row);
}
function agregarInputs(articulo, num) {
  var cantidad = articulo.stock;
  var nombre = articulo.nombre;
  var precio = articulo.precio;
  var disponible = articulo.disponible;

  var div_inputs =
    '<div class="row" id="rowInput' + num + '" style="display: none;">';
  var div_cant = crearDivInputCantidad(num, cantidad);
  var div_price = crearDivInputPrecio(num, precio);
  var div_name = crearDivInputNombre(num, nombre);
  var div_disponibilidad = crearDivInputDisponibilidad(num, disponible);
  var div_botones = crearDivOpciones(num, "Input");
  var div_modal = crearModal(num, nombre, "Input");

  div_inputs +=
    div_cant +
    div_name +
    div_price +
    div_disponibilidad +
    div_botones +
    div_modal;
  div_inputs += "</div>";
  $("#table_body_stock").append(div_inputs);
}

function crearDivInputNombre(num, nombre) {
  var div_nombre =
    '<div class="col-3 columna" id="nombreInput-' +
    num +
    '">\
    <input class="form-control" type = "text" required value = "' +
    nombre +
    '"' +
    'style = "margin:10px"/> \
        </div >';
  return div_nombre;
}

function agregarArticulo(articulo, num) {
  num += 1;
  agregarLabels(articulo, num);
  agregarInputs(articulo, num);
}

function switchDisponibilidad(elemento) {
  var elementoId = elemento.id.split("-")[1];
  var disponibleLabel = document.getElementById(
    "disponibleLabel-" + elementoId
  );
  if (elemento.childNodes[0].checked) {
    elemento.lastChild.innerText = "Disponible";
    elemento.offsetParent.className = "col-3 columna disponible";
    disponibleLabel.innerText = "Disponible";
    disponibleLabel.className = "col-3 columna disponible";
  } else {
    elemento.lastChild.innerText = "No Disponible";
    elemento.offsetParent.className = "col-3 columna no-disponible";
    disponibleLabel.innerText = "No Disponible";
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
  if (tipo == "nombre") {
    $("#cuerpoModalInput" + elementoId).text(
      "Seguro que desea eliminar el producto " + cantidad
    );
    $("#cuerpoModalLabel" + elementoId).text(
      "Seguro que desea eliminar el producto " + cantidad
    );
  }
}

function eliminarElemento(elemento) {
  $("#modalEliminarInput-" + elemento).modal("hide");
  $("#modalEliminarLabel-" + elemento).modal("hide");
  $("#rowLabel" + elemento).hide();
  $("#rowInput" + elemento).hide();
}
