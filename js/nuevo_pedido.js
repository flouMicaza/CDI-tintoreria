function buscarCliente() {
  var idCliente = $("#idc").val();
  var existeCliente = buscarId(idCliente);
  if (existeCliente != null) {
    mostrarCliente(existeCliente.nombre);
  } else {
    $("#bienvenidaCliente").css("display", "none");
    $("#idClienteNuevo").val(idCliente);
    $("#modalNuevoCliente").modal();
  }
}

function mostrarCliente(nombre) {
  $("#bienvenidaCliente").text("Bienvenid@ " + nombre);
  $("#bienvenidaCliente").css("display", "flex");
  $("#bienvenidaCliente").attr("class", "text-success");
}

function buscarId(idCliente) {
  clientes = JSON.parse(window.localStorage.getItem("usuarios")).usuarios;

  for (var i = 0; i < clientes.length; i++) {
    var cliente = clientes[i];
    var tipoCliente = cliente.clave.split("-")[1];
    if (tipoCliente == "c") {
      if (cliente.clave == idCliente) {
        return cliente;
      }
    }
  }
  return null;
}

function crearCliente() {
  $("#modalNuevoCliente").modal("hide");
  $(".alert").css("display", "flex");
  $("#idc").val($("#idClienteNuevo").val());
  var nombre = $("#nombreClienteNuevo").val();
  mostrarCliente(nombre);
}
