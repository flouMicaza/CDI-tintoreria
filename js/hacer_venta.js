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
  $("#producto-" + num).click(function() {
    //quitar del canasto
    if (this.className == "card bg-primary") {
      this.className = "card border-primary";
      quitarDeResumen(this);
    }
    //agregar al canasto
    else {
      agregarAResumen(this);
      this.className = "card bg-primary";
    }
  });
}
function agregarAResumen(elemento) {
  var tipo = elemento.id.split("-")[0];
  var id = elemento.id.split("-")[1];
  if (tipo == "pedido") {
    agregarPedidoResumen(id);
  } else {
    agregarProductoResumen(id);
  }
  $("#cartaSinProductos").remove();
  $("#botonPagar").prop("disabled", false);
}

function agregarProductoResumen(id) {
  $("#tarjetasResumen").append($("#tarjetaProducto").clone());
  var tarjetasResumen = document.getElementById("tarjetasResumen");
  var ultimoDiv = tarjetasResumen.lastChild;
  ultimoDiv.id = "ventaProducto" + id;
  ultimoDiv.style = "";
  var nombreProducto = $("#producto-" + id)
    .find("h6")
    .text();
  var pes = $("#ventaProducto" + id).find("p");
  console.log(pes);
  var precio = $("#producto-" + id)
    .find("p")
    .text();
  pes[0].innerText = nombreProducto;
  pes[1].innerText = precio;
  var totalActual = $("#precioTotal")
    .find("p")
    .text();
  totalActual = totalActual.substring(0, totalActual.length - 1);
  $("#precioTotal")
    .find("p")
    .text(parseInt(totalActual) + parseInt(precio) + "\u20AC");
  window.localStorage.setItem(
    "totalActual",
    JSON.stringify(parseInt(totalActual) + parseInt(precio))
  );
  console.log(totalActual.length, "holaa");
  var botonX = $("#ventaProducto" + id).find("span");
  botonX.click(function() {
    quitarDeResumen(document.getElementById("producto-" + id));
  });
}
function agregarPedidoResumen(id) {
  $("#tarjetasResumen").append($("#tarjetaPedido").clone());
  var tarjetasResumen = document.getElementById("tarjetasResumen");
  var ultimoDiv = tarjetasResumen.lastChild;
  ultimoDiv.id = "ventaPedido" + id;
  ultimoDiv.style = "";
  var idPedido = $("#pedido-" + id)
    .find(".card-header")
    .text()
    .split(":")[1];
  var pes = $("#ventaPedido" + id).find("p");
  pes[0].innerText = "Pedido #" + idPedido;

  var selectorContentPedido = $("#pedido-" + id)
    .find(".card-body")
    .find(".card-text");
  precio = selectorContentPedido[2].lastChild.nodeValue;
  pes[1].innerText = precio;
  var botonX = $("#ventaPedido" + id).find("span");
  botonX.click(function() {
    quitarDeResumen(document.getElementById("pedido-" + id));
  });
  var totalActual = $("#precioTotal")
    .find("p")
    .text();
  totalActual = totalActual.substring(0, totalActual.length - 1);
  $("#precioTotal")
    .find("p")
    .text(parseInt(totalActual) + parseInt(precio) + "\u20AC");
  window.localStorage.setItem(
    "totalActual",
    JSON.stringify(parseInt(totalActual) + parseInt(precio))
  );
}
function quitarDeResumen(elemento) {
  console.log(elemento);
  var tipo = elemento.id.split("-")[0];
  tipo = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  var id = elemento.id.split("-")[1];
  $("#venta" + tipo + id).remove();
  elemento.className = "card border-primary";
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

  $("#pedido-" + num).click(function() {
    if (this.className == "card bg-primary") {
      this.className = "card border-primary";
      quitarDeResumen(this);
    } else {
      this.className = "card bg-primary";
      agregarAResumen(this);
    }
  });
}

function gotoVentas() {
  $("#slider").load("./html/pagar.html", function() {
    var totalActual = JSON.parse(window.localStorage.getItem("totalActual"));
    console.log($("#precioTotalPagar").find("p"));
    $("#precioTotalPagar")
      .find("p")
      .text(totalActual + "\u20AC");
  });
}
