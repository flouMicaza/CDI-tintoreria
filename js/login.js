
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
    }
    else{
      $("#wrong-pass").show();
    }
  }
}