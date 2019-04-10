
function ingresar() {
  var usuarios = JSON.parse(window.localStorage.getItem("datos")).usuarios;
  var user = $("#user").val();
  var pass = $("#password").val();

  var usuario = usuarios.find(x => x.nombre == user);
  
  if (usuario === undefined){
    alert("Usuario no existe");
  }
  else{
    if (usuario.clave == pass){
      $("#breadcrumb").show();
      cargaInicio();
      $("#image-header").hide();
      $("#title-header").hide();
      $("#menu-nav").show();
      $("#usuario-actual").append(usuario.nombre);
    }
    else{
      $("#wrong-pass").hide();
      $("#wrong-pass").show("");
    }
  }
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
function cargaInicio(){
  $("#slider").load("./html/inicio_encargado.html");
  $(".breadcrumb-item").remove();
  $("#breadcrumb").append("<li class='breadcrumb-item'>Inicio</li>");
}