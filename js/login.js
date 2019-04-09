
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
      $('#slider').load("./html/inicio_encargado.html");
      $("#title-header").hide();
      $("#menu-nav").show();
      $("#logout").show();
    }
    else{
      $("#wrong-pass").hide();
      $("#wrong-pass").show("");
    }
  }
}

function cargaNuevoPedido(){ $("#slider").load("./html/nuevo_pedido.html");}
function cargaStock(){ $("#slider").load("./html/control_stock.html");}
function cargaPedidos(){ $("#slider").load("./html/ver_pedidos.html");}
function cargaVentas(){ $("#slider").load("./html/hacer_venta.html");}