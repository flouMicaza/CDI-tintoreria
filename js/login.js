function cargaInicio() {
  var uActual = window.localStorage.getItem("uActual");
  var usuario = JSON.parse(window.localStorage.getItem("usuario"));

  switch (uActual) {
    case "c":
      $("#slider").load("./html/perfil_usuario.html", function() {
        $("#user-name").append(usuario.nombre);
        $("#user-email").append(usuario.email);
        $("#user-phone").append(usuario.telefono);
      });
      $(".activ").hide();
      $("#nav-list").css("justify-content", "flex-end");
      $("#logout").css("margin-right", "15px");
      $(".navbar-brand").css("margin-right", "0px");
      $(".cliente").show();

      break;

    case "e":
      $("#slider").load("./html/inicio_encargado.html");
      break;

    case "t":
      $("#slider").load("./html/ver_pedidos.html",function(){
        var pedidos = JSON.parse(window.localStorage.getItem("pedidos")).pedidos;
        var serviciosG = JSON.parse(window.localStorage.getItem("servicios")).servicios;
        var trabajador = JSON.parse(window.localStorage.getItem("usuario")).clave;

        $.each(pedidos, function(index, pedido){

          if(pedido.trabajador == trabajador){
            var estados = serviciosG.find(x => x.nombre == pedido.servicio).estados;
            var listado = "<div class='col columna'><select value='Ejemplo' name='tipo_prenda' class='form-control'>";
            $.each(estados, function(index, edo){
              if (edo === pedido.estado){
                listado += "<option value='"+edo+"' selected>"+edo+"</option>";
              }else{
                listado += "<option value='"+edo+"'>"+edo+"</option>"; 
              }
            });listado += "</select></div>";

            var elementos = "<div class='row'>";
            elementos += "<div class='col columna'>"+pedido.codigo+"</div>";
            elementos += "<div class='col columna'>"+pedido.prenda+"</div>";
            elementos += "<div class='col columna'>"+pedido.servicio+"</div>";
            elementos += listado;
            elementos += "<div class='col columna'>";
            elementos += "<button id='btn-"+pedido.codigo+"' class='btn btn-primary contact collapsed' onclick='cambiarBtn(\""+pedido.codigo+"\");' data-toggle='collapse' data-target='#pedido-"+pedido.codigo+"' aria-expanded='false' aria-controls='demo'>Contactar</button></div></div>";

            elementos += "<div class='row'><div class='col columna sms-texto'><div id='pedido-"+pedido.codigo+"' class='collapse sms'>";
            elementos += "<label for='obs-"+pedido.codigo+"'>Introduzca aquí su mensaje</label><textarea name='idc' id='obs-"+pedido.codigo+"' class='form-control'></textarea>";
            elementos += "<div style='margin-top:10px; text-align: right'><button class='btn btn-primary' onclick='enviarSMS(\""+pedido.codigo+"\");' data-toggle='modal' data-target='#exampleModal'> Enviar SMS</button></div> </div></div></div>";
            
            $("#pedidos-trabajador").append(elementos);
          }
        });
      });
      $(".activ").hide();
      $("#nav-list").css("justify-content", "flex-end");
      $("#logout").css("margin-right", "0px");
      break;

    default:
      console.log("default");
      break;
  }
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'>Inicio</li>");
}

function ingresar() {
  var usuarios = JSON.parse(window.localStorage.getItem("usuarios")).usuarios;
  var user = $("#user").val();
  var pass = $("#password").val();

  var usuario = usuarios.find(x => x.nombre == user);

  if (usuario === undefined) {
    alert("Usuario no existe");
  } else {
    if (usuario.pass == pass) {
      window.localStorage.setItem(
        "uActual",
        usuario.clave.charAt(usuario.clave.length - 1)
      );
      window.localStorage.setItem("usuario", JSON.stringify(usuario));
      $("#breadcrumb").show();
      $("#image-header").hide();
      $("#title-header").hide();
      $("#menu-nav").show();
      $("#usuario-actual").append(usuario.nombre);
      cargaInicio();
    } else {
      $("#wrong-pass").hide();
      $("#wrong-pass").show("");
    }
  }
}

function salir() {
  window.localStorage.removeItem("uActual");
  window.localStorage.removeItem("usuario");
  location.reload(true);
}

function cargaNuevoPedido() {
  $("#slider").load("./html/nuevo_pedido.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append(
    "<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Nuevo Pedido</li>"
  );
}
function cargaStock() {
  $("#slider").load("./html/control_stock.html", function() {
    cargarDatosStock();
  });
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append(
    "<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Stock</li>"
  );
}
function cargaPedidos() {
  $("#slider").load("./html/pedidos_trabajador.html", function(){
    var pedidos = JSON.parse(window.localStorage.getItem("pedidos")).pedidos;
    $.each(pedidos, function(index, pedido){
      var pedidoTxt = "<div class='row'>";
      pedidoTxt += "<div class='col-3 columna'>"+pedido.trabajador+"</div>";
      pedidoTxt += "<div class='col-3 columna'>"+pedido.codigo+"</div>";
      pedidoTxt += "<div class='col-3 columna'>"+pedido.estado+"</div>";
      pedidoTxt += "<div class='col-3 columna'>"+pedido.extras+"</div></div>";
      $("#pedidos-encargado").append(pedidoTxt);
    });
  });
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append(
    "<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Pedidos</li>"
  );
}
function cargaVentas() {
  $("#slider").load("./html/inicio_ventas.html", function() {
    $("#modalCliente").modal();
  });
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append(
    "<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Ventas</li>"
  );
}
function cargaPerfil() {
  $("#slider").load("./html/perfil_usuario.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append(
    "<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Perfil</li>"
  );
}
