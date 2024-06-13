//recuperar de localstorage datos.
//preguntar al usuario que producto quiere comprar
//comparar si el nombre del articulo y cuanto
//si el nombre está se le resta el stock
//si le da un numero negativo salta una alerta de que no hay
//setear la nueva información, actualizar el producto.

function controlStock() {
  const stockControl = JSON.parse(localStorage.getItem("Prueba"));
  const nombreProducto = prompt("Ingrese el Producto a comprar");
  const cantidadProducto = parseInt(prompt("Ingrese cantidad a comprar"));

  for (let i = 0; i < stockControl.length; i++) {
    if (stockControl[i].nombre == nombreProducto) {
      if (stockControl[i].cantidadStock - cantidadProducto < 0) {
        alert("No se puede hacer la compra por falta de stock");
      } else {
        stockControl[i].cantidadStock =
          stockControl[i].cantidadStock - cantidadProducto;
        localStorage.setItem("Prueba", JSON.stringify(stockControl));
        alert("Producto comprado");
        break;
      }
    }
  }
}
