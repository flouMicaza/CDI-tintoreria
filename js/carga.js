function cargar() {
  var datos = {
    usuarios: [
      {
        clave: "11111-c",
        nombre: "cliente1",
        apellido: "apellido1",
        telefono: "3458672855",
        email: "cliente1@mail.com"
      },
      {
        clave: "22222-c",
        nombre: "cliente2",
        apellido: "apellido2",
        telefono: "34464562855",
        email: "cliente2@mail.com"
      },
      {
        clave: "33333-c",
        nombre: "cliente3",
        apellido: "apellido3",
        telefono: "3458673855",
        email: "cliente3@mail.com"
      },
      {
        clave: "44444-c",
        nombre: "cliente4",
        apellido: "apellido4",
        telefono: "34462562855",
        email: "cliente4@mail.com"
      },

      {
        clave: "11111-e",
        nombre: "encargado",
        apellido: "encargado",
        telefono: "34464562855",
        email: "encargado@mail.com"
      },
      {
        clave: "11111-t",
        nombre: "trabajador1",
        apellido: "trabajador1",
        telefono: "34464562855",
        email: "trabajador1@mail.com"
      },
      {
        clave: "22222-t",
        nombre: "trabajador2",
        apellido: "trabajador2",
        telefono: "34464562855",
        email: "trabajador2@mail.com"
      }
    ],

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
    ],

    servicios: [
      { nombre: "lavado simple" },
      { nombre: "lavado en seco" },
      { nombre: "tintado" }
    ],

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
        disponible: true,
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
        disponible: true,
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
  window.localStorage.setItem("datos", JSON.stringify(datos));
  console.log("datos cargados");
}
