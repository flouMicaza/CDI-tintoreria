function cambiarBtn(boton){

  $("#btn-"+boton).toggleClass("btn-primary");
  $("#btn-"+boton).toggleClass("btn-secondary");

  if($("#btn-"+boton).html() == "Contactar"){
    $("#btn-"+boton).text("Cancelar");
  }else{
    $("#btn-"+boton).text("Contactar");
  }
  $("#obs-"+boton).val("");
  
}

function enviarSMS(idTexto){
  $(".modal-body").text("");
  $(".modal-body").append($("#obs-"+idTexto).val());
  cambiarBtn(idTexto);
}