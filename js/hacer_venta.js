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
  var ncol = 0;
  var disponibles = articulos.filter(articulo => articulo.disponible == true);
  for (var i = 0; i < disponibles.length; i++) {
    if (disponibles.length % 3 == 0 || disponibles.length % 3 == 2) {
      if (i % 3 == 0) {
        ncol++;
        crearDeck(ncol);
      }
    } else {
      if (i % 4 == 0) {
        ncol++;
        crearDeck(ncol);
      }
    }
    construirArticulo(articulos[i], i, ncol);
  }
  $("#columnaProductos").remove();
}

function crearDeck(ncol) {
  $("#cuerpoProductos").append($("#columnaProductos").clone());
  var cuerpoProductos = document.getElementById("cuerpoProductos");
  var nuevoDeck = cuerpoProductos.lastChild;
  nuevoDeck.id = "deck-" + ncol;
  $("#deck-" + ncol).empty();
  $("#cuerpoProductos").append("<br/>");
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

function construirArticulo(articulo, num, ncol) {
  $("#deck-" + ncol).append($("#primeroProducto").clone());
  var columnaPedidosDiv = document.getElementById("deck-" + ncol);
  var nuevoArticuloDiv = columnaPedidosDiv.lastChild;
  nuevoArticuloDiv.id = "producto-" + num;
  $("#producto-" + num)
    .find("h6")
    .text(articulo.nombre);
  $("#producto-" + num)
    .find("p")
    .text(articulo.precio + " \u20AC");
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
  selector[1].lastChild.nodeValue = pedido.servicio;
  selector[2].lastChild.nodeValue = pedido.precio + " \u20AC";
}
