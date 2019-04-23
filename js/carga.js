function cargar() {
  var usuarios = {
    usuarios: [
      {
        clave: "11111-c",
        nombre: "cliente1",
        telefono: "3458672855",
        email: "cliente1@mail.com",
        pass: "contraseña"
      },
      {
        clave: "22222-c",
        nombre: "cliente2",
        telefono: "34464562855",
        email: "cliente2@mail.com",
        pass: "contraseña"
      },
      {
        clave: "33333-c",
        nombre: "cliente3",
        telefono: "3458673855",
        email: "cliente3@mail.com",
        pass: "contraseña"
      },
      {
        clave: "44444-c",
        nombre: "cliente4",
        telefono: "34462562855",
        email: "cliente4@mail.com",
        pass: "contraseña"
      },
      {
        clave: "11111-e",
        nombre: "encargado",
        telefono: "34464562855",
        email: "encargado@mail.com",
        pass: "contraseña"
      },
      {
        clave: "11111-t",
        nombre: "trabajador1",
        telefono: "34464562855",
        email: "trabajador1@mail.com",
        pass: "contraseña"
      },
      {
        clave: "22222-t",
        nombre: "trabajador2",
        telefono: "34464562855",
        email: "trabajador2@mail.com",
        pass: "contraseña"
      }
    ]
  };

  var prendas = {
    prendas: [
      {
        nombre: "camiseta",
        tipos: ["seda", "polar", "algodón", "lino", "tipo1", "tipo2"]
      },
      {
        nombre: "pantalon",
        tipos: ["tela", "seda", "polar", "algodón", "tipo1", "tipo2"]
      },
      { nombre: "vestido", tipos: ["jeans", "seda", "lino", "algodón", ""] },
      {
        nombre: "camisa",
        tipos: ["seda", "polar", "algodón", "lino", "tipo1", "tipo2"]
      },
      {
        nombre: "suéter",
        tipos: ["seda", "polar", "algodón", "lino", "tipo1", "tipo2"]
      }
    ]
  };

  var servicios = {
    servicios: [
      {
        nombre: "Lavado completo",
        estados: [  
                  "En Lavandería",
                  "Arreglando", 
                  "Lavando", 
                  "Secado",
                  "Secado y Revisión",
                  "Planchado",
                  "Terminado" 
                ]
      },
      { 
        nombre: "Lavado en seco",
        estados: [
                  "En Lavandería",
                  "Arreglando",
                  "Eliminación de manchas",
                  "Lavando en seco",
                  "Planchado",
                  "Terminado"
                ]
      },
      { 
        nombre: "Tintado",
        estados: [
                "En Lavandería",
                "Arreglando", 
                "Lavando", 
                "Secado",
                "Secado y Revisión",
                "Tintado",
                "Planchado",
                "Terminado" 
              ]
      }
    ]
  };

  var articulos = {
    articulos: [
      {
        clave: "prod-1",
        nombre: "detergente color",
        stock: 1,
        disponible: true,
        precio: 3
      },
      {
        clave: "prod-2",
        nombre: "detergente detergente b-n",
        stock: 1,
        disponible: true,
        precio: 10
      },
      {
        clave: "prod-3",
        nombre: "suavizante normal",
        stock: 1,
        disponible: true,
        precio: 6
      },
      {
        clave: "prod-4",
        nombre: "suavizante delicados",
        stock: 1,
        disponible: false,
        precio: 10
      },
      {
        clave: "prod-5",
        nombre: "gel de lavado",
        stock: 1,
        disponible: true,
        precio: 10
      },
      {
        clave: "prod-6",
        nombre: "crema de limpieza especial",
        stock: 1,
        disponible: true,
        precio: 10
      },
      {
        clave: "prod-7",
        nombre: "bolsas ropa delicada",
        stock: 1,
        disponible: false,
        precio: 10
      },
      {
        clave: "prod-8",
        nombre: "pack bolsas ropa delicada",
        stock: 1,
        disponible: true,
        precio: 10
      }
    ]
  };

  var tarjetas = {
    tarjetas:[
      {
        numero: "1111",
        cliente: "11111-c",
        puntos: 36
      },
      {
        numero: "2222",
        cliente: "22222-c",
        puntos: 100
      },
      {
        numero: "3333",
        cliente: "33333-c",
        puntos: 0
      },
      {
        numero: "4444",
        cliente: "44444-c",
        puntos: 12
      }
    ]
  }

  var pedidos = {
    pedidos: [
      {
        cliente: "22222-c",
        codigo: "15742",
        estado: "Terminado",
        prenda: "Vestido",
        servicio: "Tintado",
        trabajador: "11111-t",
        img: "../assets/img/svg/dress.svg",
        precio: 18
      },
      {
        cliente: "22222-c",
        codigo: "12831",
        estado: "Lavando",
        prenda: "Camisa",
        servicio: "Lavado en seco",
        trabajador: "22222-t",
        img: "../assets/img/svg/shirt.svg",
        precio: 25
      },
      {
        cliente: "22222-c",
        codigo: "90478",
        estado: "Lavando",
        prenda: "Pantalon",
        servicio: "Lavado completo",
        trabajador: "11111-t",
        img: "../assets/img/svg/jeans.svg",
        precio: 13
      },
      {
        cliente: "11111-c",
        codigo: "12345",
        estado: "Secado",
        prenda: "Lavando en seco",
        servicio: "Lavado en seco",
        trabajador: "11111-t",
        img: "../assets/img/svg/tshirt.svg",
        precio: 8
      },
      {
        cliente: "11111-c",
        codigo: "79356",
        estado: "Planchado",
        prenda: "Pantalón",
        servicio: "Lavado completo",
        trabajador: "22222-t",
        img: "../assets/img/svg/jeans.svg",
        precio: 15
      },
      {
        cliente: "44444-c",
        codigo: "39590",
        estado: "Secando",
        prenda: "Falda",
        servicio: "Tintado",
        trabajador: "22222-t",
        img: "../assets/img/svg/skirt.svg",
        precio: 25
      }
    ]
  }

  var mensajes = {
    mensajes: [
      {
        cliente: "11111-c",
        pedido: "79356",
        texto: "Prenda con manchas difíciles por lo que requiere servicio adicional",
        costo: 5
      },
      {
        cliente: "22222-c",
        pedido: "15742",
        texto: "Prenda con manchas difíciles por lo que requiere servicio adicional",
        costo: 7
      },
      {
        cliente: "22222-c",
        pedido: "90478",
        texto: "Prenda con manchas difíciles por lo que requiere servicio adicional",
        costo: 4
      }
    ]
  }

  window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
  window.localStorage.setItem("prendas", JSON.stringify(prendas));
  window.localStorage.setItem("servicios", JSON.stringify(servicios));
  window.localStorage.setItem("articulos", JSON.stringify(articulos));
  window.localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  window.localStorage.setItem("pedidos", JSON.stringify(pedidos));
  window.localStorage.setItem("mensajes", JSON.stringify(mensajes));

  console.log("datos cargados");
}
