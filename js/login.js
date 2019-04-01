
function prueba() {
  var usuarios = JSON.parse(window.localStorage.getItem("datos")).usuarios;
  var user = $("#user").val();
  var pass = $("#password").val();

  var pass2 = usuarios.find(x => x.nombre === user).clave;
  
  if (pass2 == pass){
    $('#slider').load("./html/principal.html");
  }
  else{
    $("#wrong-pass").show();
  }
  
  
}