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