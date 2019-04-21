function cargaInicio(){

  var uActual = window.localStorage.getItem("uActual");
  var usuario = JSON.parse(window.localStorage.getItem("usuario"));
  
  switch(uActual){
    case 'c':
      $("#slider").load("./html/perfil_usuario.html", function(){
        $("#user-name").append(usuario.nombre);
        $("#user-email").append(usuario.email);
        $("#user-phone").append(usuario.telefono);
      });
      $(".activ").hide();
      $("#nav-list").css("justify-content","flex-end");
      $("#logout").css("margin-right","15px");
      $(".navbar-brand").css("margin-right","0px");
      $(".cliente").show();

      break;

    case 'e':
      $("#slider").load("./html/inicio_encargado.html");
      break;

    case 't':
      $("#slider").load("./html/ver_pedidos.html");
      $(".activ").hide();
      $("#nav-list").css("justify-content","flex-end");
      $("#logout").css("margin-right","0px");
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
  }
  else{
    if (usuario.pass == pass){
      window.localStorage.setItem("uActual", usuario.clave.charAt(usuario.clave.length-1));
      window.localStorage.setItem("usuario", JSON.stringify(usuario));
      $("#breadcrumb").show();
      $("#image-header").hide();
      $("#title-header").hide();
      $("#menu-nav").show();
      $("#usuario-actual").append(usuario.nombre);
      cargaInicio();
    }
    else{
      $("#wrong-pass").hide();
      $("#wrong-pass").show("");
    }
  }
}

function salir(){
  window.localStorage.removeItem("uActual");
  location.reload(true);
}

function cargaNuevoPedido(){
  $("#slider").load("./html/nuevo_pedido.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Nuevo Pedido</li>");
}
function cargaStock(){
  $("#slider").load("./html/control_stock.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Stock</li>");
}
function cargaPedidos(){ 
  $("#slider").load("./html/pedidos_trabajador.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Pedidos</li>");
}
function cargaVentas(){
  $("#slider").load("./html/hacer_venta.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Ventas</li>");
}

function cargaTarjeta(){
  $("#slider").load("./html/tarjeta_usuario.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Mi tarjeta</li>");
}
function cargaPedidosCl(){
  $("#slider").load("./html/pedidos_usuario.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Mis pedidos</li>");
}
