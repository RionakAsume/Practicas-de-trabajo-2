function comprarObjetos() {
  const listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras"));
  const objetosDePrueba = JSON.parse(localStorage.getItem("Prueba"));
  const creaciondecarrito = document.querySelector(".tucarrito");
  let totalproductos = 0;

  if (!listaDeCompras || !objetosDePrueba) {
    alert("No se pudo encontrar el producto o la lista de productos.");
    return;
  }

  const objetosComprados = listaDeCompras
    .map((nombreProducto) => {
      return objetosDePrueba.find((objeto) => objeto.nombre === nombreProducto);
    })
    .filter((objeto) => objeto !== undefined);

  localStorage.setItem("oLista", JSON.stringify(listaDeCompras)); // Guardar solo los nombres

  objetosComprados.forEach((element) => {
    const carrocompra = document.createElement("div");
    carrocompra.className = "tuCompra";
    carrocompra.innerHTML = `
          <img src="${element.img}" alt="Imagen de ${element.descripcion}">
          <div class="contendido">
              <p>Producto: ${element.nombre}</p>
              <p>Descripcion: ${element.descripcion}</p>
              <p>Precio: ${element.precio}</p>
              <p>Categoria: ${element.categoria}</p>
              <p>Proveedor: ${element.proveedor}</p>
              <p>cantidadStock: ${element.cantidadStock}</p>
          </div>
          <div class="eliminar"><button>X</button>`;

    creaciondecarrito.appendChild(carrocompra);
    totalproductos += element.precio;
  });

  document.querySelectorAll(".eliminar button").forEach((button, index) => {
    button.setAttribute("data-index", index);
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      listaDeCompras.splice(index, 1);
      localStorage.setItem("listaDeCompras", JSON.stringify(listaDeCompras));
      this.parentElement.parentElement.remove();
    });
  });

  const totalElement = document.createElement("div");
  totalElement.className = "total";
  totalElement.innerHTML = `<h1 class="precioFinal">Total: ${totalproductos.toFixed(2)}</h1>`;
  creaciondecarrito.appendChild(totalElement);
}

function botoncompra() {
  const listaDeCompras = JSON.parse(localStorage.getItem("oLista"));
  const objetosDePrueba = JSON.parse(localStorage.getItem("Prueba"));

  if (!listaDeCompras || !objetosDePrueba) {
    alert("No se pudo encontrar el producto o la lista de productos.");
    return;
  }

  listaDeCompras.forEach((nombreProducto) => {
    const productoEncontrado = objetosDePrueba.find(
      (objeto) => objeto.nombre === nombreProducto
    );

    if (productoEncontrado && productoEncontrado.cantidadStock > 0) {
      productoEncontrado.cantidadStock -= 1;
    }
  });

  localStorage.setItem("Prueba", JSON.stringify(objetosDePrueba));

  const creaciondecarrito = document.querySelector(".tucarrito");
  creaciondecarrito.innerHTML="";

  console.log(objetosDePrueba);

  localStorage.removeItem("listaDeCompras")

  setTimeout(() => {
    window.location.reload(); 
}, 1000);

}


comprarObjetos();
