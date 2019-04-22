function editarDatos(){
  var usuario = JSON.parse(window.localStorage.getItem("usuario"));
  console.log("Success");

  $("#edit-info").hide();
  $("#save-info").show();

  $("#user-name").remove();
  $("#user-email").remove();
  $("#user-phone").remove();
  $("#div-name").append("<input class='card-text info-user' id='user-name' value='"+usuario.nombre+"' required></input>");
  $("#div-email").append("<input class='card-text info-user' id='user-email' value='"+usuario.email+"' required></input>");
  $("#div-phone").append("<input class='card-text info-user' id='user-phone' value='"+usuario.telefono+"' required></input>");
}

function noEditar(){
  var usuario = JSON.parse(window.localStorage.getItem("usuario"));

  $("#slider").load("./html/perfil_usuario.html", function(){
    $("#user-name").append(usuario.nombre);
    $("#user-email").append(usuario.email);
    $("#user-phone").append(usuario.telefono);
  });
}

function guardarDatos(){
  var usuario = JSON.parse(window.localStorage.getItem("usuario"));
  
  usuario.nombre = $("#user-name").val();
  usuario.email = $("#user-email").val();
  usuario.telefono = $("#user-phone").val();

  window.localStorage.removeItem("usuario");
  window.localStorage.setItem("usuario", JSON.stringify(usuario));

  $("#user-name").remove();
  $("#user-email").remove();
  $("#user-phone").remove();
  $("#div-name").append("<p class='card-text info-user' id='user-name'></p>");
  $("#div-email").append("<p class='card-text info-user' id='user-email'></p>");
  $("#div-phone").append("<p class='card-text info-user' id='user-phone'></p>");


  $("#slider").load("./html/perfil_usuario.html", function(){
    $("#user-name").append(usuario.nombre);
    $("#user-email").append(usuario.email);
    $("#user-phone").append(usuario.telefono);
  });

  $("#usuario-actual").text(usuario.nombre);
  $("#usuario-actual").prepend("<img src='../assets/img/svg/exit.svg' height='25'>");
}

function cargaTarjeta(){
  $("#slider").load("./html/tarjeta_usuario.html", function(){

    var usuario = JSON.parse(window.localStorage.getItem("usuario"));
    var tarjetas = JSON.parse(window.localStorage.getItem("tarjetas")).tarjetas;
    var tarjeta = tarjetas.find(x => x.cliente == usuario.clave);

    $("#name-tarjeta").append(usuario.nombre);
    $("#clave-tarjeta").append("No. cliente: "+usuario.clave);

    if(tarjeta === undefined){
      $("#num-card").append("No cuentas con una tarjeta de fidelidad");
    }
    else{
      $("#num-card").append("No. tarjeta: "+tarjeta.numero);
      $("#puntos-card").append("Puntos acumulados: "+tarjeta.puntos);
      $("#tarjeta-usuario").append("<div class='card-footer'> ¡Con tus puntos puedes obtener descuentos y productos gratis!</div>");
    }
  });

  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Perfil</a></li><li class='breadcrumb-item' aria-current='page'>Mi tarjeta</li>");
}

function cargaPedidosCl(){
  $("#slider").load("./html/pedidos_usuario.html", function(){
    var usuario = JSON.parse(window.localStorage.getItem("usuario"));
    var pedidos = JSON.parse(window.localStorage.getItem("pedidos")).pedidos;
    var mensajes = JSON.parse(window.localStorage.getItem("mensajes")).mensajes;

    $("#name-tarjeta").append(usuario.nombre);
    $("#clave-tarjeta").append("No. cliente: "+usuario.clave);

    $.each(pedidos, function(index, pedido){
      if (pedido.cliente == usuario.clave){
        $("#pedidos").append("<li class='list-group-item'><div id='"+pedido.codigo+"' class='card-body'><div class='img-prenda'><img src='"+pedido.img+"'>"+pedido.prenda+"</div><div class='info-pedido'><p>No. Pedido: "+pedido.codigo+"</p><p>Estado: "+pedido.estado+"</p><p class='precio'>"+pedido.precio+" €</p></div></div></li>");
      }
    });

    $.each(mensajes, function(index, mensaje){
      if (mensaje.cliente == usuario.clave){
        $("#"+mensaje.pedido).append("<div><a href='#' onclick='mostrarMensaje("+mensaje.pedido+");' class='badge badge-info alert-pedido' data-toggle='modal' data-target='#modalMensaje'>!</a></div>");
      }
    });

  });
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Perfil</a></li><li class='breadcrumb-item' aria-current='page'>Mis pedidos</li>");
}

function mostrarMensaje(pedido){
  var mensajes = JSON.parse(window.localStorage.getItem("mensajes")).mensajes;
  var mensaje = mensajes.find(x => x.pedido == pedido);

  $("#texto-mensaje").prepend(mensaje.texto+"<p id='precio-mensaje'> Costo: "+mensaje.costo+" €</p>");
  $("#exampleModalLabel").append("No. Pedido: "+mensaje.pedido);
}

function descartarMensaje(){
  $("#texto-mensaje").text("");
  $("#exampleModalLabel").text("");
  $("#precio-mensaje").text("");
}

function aceptarMensaje(){
  var costo = parseInt($("#precio-mensaje").html().slice(8,-2));
  var pedido = $("#exampleModalLabel").html().slice(12);
  var precioActual = parseInt($("#"+pedido+" .precio").html().slice(0,-2));
  var precioNuevo = precioActual + costo;
  var pedidos = JSON.parse(window.localStorage.getItem("pedidos")).pedidos;
  var mensajes = JSON.parse(window.localStorage.getItem("mensajes")).mensajes;
  var mensaje = mensajes.find(x => x.pedido == pedido);

  mensajes.splice( mensajes.indexOf(mensaje), 1 );

  $.each(pedidos, function(index, pedidoX){
    if (pedidoX.codigo == pedido){
      pedidoX.precio = precioNuevo;
    }
  });
  
  $("#"+pedido+" .precio").text(precioNuevo+" €");
  $("#"+pedido+" .alert-pedido").hide();

  window.localStorage.removeItem("pedidos");
  window.localStorage.removeItem("mensajes");
  window.localStorage.setItem("pedidos", JSON.stringify({pedidos:pedidos}));
  window.localStorage.setItem("mensajes", JSON.stringify({mensajes:mensajes}));
  descartarMensaje();
}