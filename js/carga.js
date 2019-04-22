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
      { nombre: "lavado simple" },
      { nombre: "lavado en seco" },
      { nombre: "tintado" }
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

  window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
  window.localStorage.setItem("prendas", JSON.stringify(prendas));
  window.localStorage.setItem("servicios", JSON.stringify(servicios));
  window.localStorage.setItem("articulos", JSON.stringify(articulos));
  window.localStorage.setItem("tarjetas", JSON.stringify(tarjetas));

  console.log("datos cargados");
}
