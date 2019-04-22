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

function cargarSelects() {
  $(".option-selected").html(" -- Seleccionar --");

  $(".select").on("click", function () {
    if ($(this).children(".option").css("display") == "none") {
      $(this).children(".option").css("display", "block");
      $(this).children(".hr").css("display", "block");
      // $(".option-selected").css("padding-bottom","10px");
      $(this).children(".arrow").css("color", "blue");
      $(this).css("z-index", "999");
    }
    else {
      $(".option").css("display", "none");
      $(".hr").css("display", "none");
      $(".option-selected").css("padding-bottom", "5px");
      $(".arrow").css("color", "black");
      $(this).css("z-index", "0");
    }
  });

  $(".option").on("click", function () {
    if ($(".option").attr("data") != "undefined") {
      $(this).parent().children(".option-selected").html($(this).html());
      $(".option").removeAttr("data");
      $(this).attr("data", "selected");
      $(this).parent().children("select").attr("value", $(this).attr("value"));
    }
  });
}