function cargarDatosVentas() {
  cargarUsuarioVentas();
}
function cargarUsuarioVentas() {
  var idCliente = $("#idClienteVentas").val();
  var cliente = buscarId(idCliente);
  if (cliente != null) {
    $("#slider").load("./html/hacer_venta.html", function() {
      $("#nombreUser").text(cliente.nombre);

      cargarPedidosVentas(cliente);
      cargarArticulosVentas();
    });
  } else {
    alert("no existe el usuario");
    console.log("no existe");
  }
}

function cargarArticulosVentas() {
  var articulos = JSON.parse(window.localStorage.getItem("articulos"))
    .articulos;
  for (var i = 0; i < articulos.length; i++) {
    construirArticulo(articulos[i]);
  }
}

function construirArticulo(articulo) {
  console.log("se construye el articulo");
}

function cargarPedidosVentas(cliente) {
  var pedidos = JSON.parse(window.localStorage.getItem("pedidos")).pedidos;
  var cont = 0;
  for (var i = 0; i < pedidos.length; i++) {
    var pedido = pedidos[i];
    if (pedido.cliente == cliente.clave) {
      cont++;
      construirPedido(pedido, cont);
    }
  }

  document.getElementById("primerPedido").remove();
}

function construirPedido(pedido, num) {
  $("#columnaPedidos").append($("#primerPedido").clone());
  var columnaPedidosDiv = document.getElementById("columnaPedidos");
  var nuevoPedidoDiv = columnaPedidosDiv.lastChild;
  nuevoPedidoDiv.id = "pedido-" + num;
  $("#pedido-" + num)
    .find(".card-header")
    .html("<b>ID: </b>" + pedido.codigo);

  var selector = $("#pedido-" + num)
    .find(".card-body")
    .find(".card-text");

  selector[0].lastChild.nodeValue = pedido.prenda;
  selector[2].lastChild.nodeValue = pedido.precio + " \u20AC";
}
