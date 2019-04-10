function botondiv(elemento) {
  if (elemento.childNodes[1].checked) {
    elemento.childNodes[3].innerText = "Disponible";
    elemento.offsetParent.className = "col-2 columna disponible";
  } else {
    elemento.childNodes[3].innerText = "No Disponible";
    elemento.offsetParent.className = "col-2 columna no-disponible";
  }
}
