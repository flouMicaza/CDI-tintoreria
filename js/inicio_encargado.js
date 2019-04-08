function irNuevoPedido() {
  $("#slider").load("../html/nuevo_pedido.html");
}

function irControlDeStock() {
  $("#slider").load("../html/control_stock.html");
}

function irVerPedido() {
  $("#slider").load("../html/pedidos_trabajador.html");
}

function irRealizarVenta() {
  $("#slider").load("../html/hacer_venta.html");
}

function botondiv(elemento) {
  if (elemento.childNodes[1].checked) {
    elemento.childNodes[3].innerText = "Disponible";
    elemento.offsetParent.className = "col-2 columna disponible";
  } else {
    elemento.childNodes[3].innerText = "No Disponible";
    elemento.offsetParent.className = "col-2 columna no-disponible";
  }
}
