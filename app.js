class Producto {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = 1;
    }
    agregarCantidad(cantidadDeseada) {
      this.cantidad = this.cantidad + cantidadDeseada;
    }
    descripcioncorto() {
      return (
        "id: " +
        this.id +
        " nombre: " +
        this.nombre +
        " precio: " +
        this.precio +
        "\n"
      );
    }
    descripcionCarrito() {
      return (
        "id: " +
        this.id +
        " nombre: " +
        this.nombre +
        " precio: " +
        this.precio +
        " cantidad: " +
        this.cantidad +
        "\n"
      );
    }
  }
  class Carrito {
    constructor() {
      this.listaCompra = [];
    }
    agregar(productoNuevo) {
      let existe = this.listaCompra.some(
        (producto) => producto.id == productoNuevo.id
      );
      if (!existe) {
        this.listaCompra.push(productoNuevo);
      }
    }
    mostrar() {
      let descripcionListaCompra = "Carrito: \n\n";
      this.listaCompra.forEach((producto) => {
        descripcionListaCompra =
          descripcionListaCompra + producto.descripcionCarrito();
      });
      return descripcionListaCompra;
    }
    calcularTotal() {
      return this.listaCompra.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
      );
    }
  }
  
  class controladorDeProductos {
    constructor() {
      this.listaProductos = [];
    }
    agregar(Producto) {
      this.listaProductos.push(Producto);
    }
    mostrar() {
      let descripcion = "Elija el id del producto que quiera comprar\n\n";
      this.listaProductos.forEach((producto) => {
        descripcion = descripcion + producto.descripcioncorto();
      });
      return descripcion;
    }
    buscarId(id) {
      return this.listaProductos.find((producto) => producto.id == id);
    }
  }
  
  const p1 = new Producto(1, "buscapina", 200);
  const p2 = new Producto(2, "ibuprofeno", 300);
  const p3 = new Producto(3, "pulmosan", 1000);
  const p4 = new Producto(4, "antialergico", 1300);
  
  const control = new controladorDeProductos();
  const carrito = new Carrito();
  
  control.agregar(p1);
  control.agregar(p2);
  control.agregar(p3);
  control.agregar(p4);
  
  let rta = " ";
  let nombreBD = " ";
  let apellidoBD = " ";
  nombreBD = prompt("indique su nombre");
  apellidoBD = prompt("indique su apellido");
  do {
    alert("Bievenido " + nombreBD + " " + apellidoBD);
    let id = Number(prompt(control.mostrar()));
    const producto = control.buscarId(id);
    let cantidadDeseada = Number(prompt("ingrese la cantidad que desea"));
    producto.agregarCantidad(cantidadDeseada);
    carrito.agregar(producto);
    alert(carrito.mostrar());
    rta = prompt("desea finalizar su compra?").toLowerCase();
  } while (rta != "si");
  alert("el total es de: $" + carrito.calcularTotal());
  