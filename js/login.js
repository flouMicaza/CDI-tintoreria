function cargaInicio(){

  var uActual = window.localStorage.getItem("uActual");
  
  switch(uActual){
    case 'c':
      $("#slider").load("./html/perfil_usuario.html");
      $(".activ").hide();
      $("#navbarNavDropdown").removeClass("collapse navbar-collapse");
      $("#nav-list").css("justify-content","flex-end");
      $("#button-collapse").hide();
      break;

    case 'e':
      $("#slider").load("./html/inicio_encargado.html");
      break;

    case 't':
      $("#slider").load("./html/ver_pedidos.html");
      break;
    
    default:
      console.log("default");
      break;
  }
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'>Inicio</li>");
}

function ingresar() {
  var usuarios = JSON.parse(window.localStorage.getItem("datos")).usuarios;
  var user = $("#user").val();
  var pass = $("#password").val();

  var usuario = usuarios.find(x => x.nombre == user);

  if (usuario === undefined) {
    alert("Usuario no existe");
  }
  else{
    if (usuario.clave == pass){
      window.localStorage.setItem("uActual", usuario.clave.charAt(usuario.clave.length-1));
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
  $("#slider").load("./html/ver_pedidos.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Pedidos</li>");
}
function cargaVentas(){
  $("#slider").load("./html/hacer_venta.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Ventas</li>");
}
function cargaPerfil(){
  $("#slider").load("./html/perfil_usuario.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'><a href='#' onclick='cargaInicio();'>Inicio</a></li><li class='breadcrumb-item' aria-current='page'>Perfil</li>");
}
