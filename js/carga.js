function cargar() {
  var datos = {
	usuarios: [
	{clave: 1111 , nombre: "cliente1", apellido: "ajda", telefono: "3458672855", email: "cliente1@mail.com"},
	{clave: 2222 , nombre: "cliente2", apellido: "ajdfgga", telefono: "34464562855", email: "cliente2@mail.com"},
	{clave: 3333 , nombre: "encargado", apellido: "encargado", telefono: "34464562855", email: "encargado@mail.com"},
	{clave: 4444 , nombre: "trabajador1", apellido: "trabajador1", telefono: "34464562855", email: "trabajador1@mail.com"},
	{clave: 5555 , nombre: "trabajador2", apellido: "trabajador2", telefono: "34464562855", email: "trabajador2@mail.com"},
	],
	prendas: [
	{nombre: "camiseta"},
	{nombre: "pantalon"},
	{nombre: "vestido"},
	{nombre: "camisa"},
	{nombre: "suéter"},
	{nombre: "traje"},
	],
	servicios: [
	{nombre: "lavado simple"},
	{nombre: "lavado en seco"},
	{nombre: "tintado"}	
	],
	articulos: [
	{clave: 1, nombre: "detergente", stock: 1 , disponible: true}
	]}

  window.localStorage.setItem("datos", JSON.stringify(datos));
}

