function comprarObjetos() {
    const listaDeCompras = JSON.parse(localStorage.getItem("listaDeCompras"));
    const objetosDePrueba = JSON.parse(localStorage.getItem("Prueba"));

    console.log("Lista de Compras:", listaDeCompras);
    console.log("Objetos de Prueba:", objetosDePrueba);

    if (!listaDeCompras || !objetosDePrueba) {
        alert('No se pudo encontrar el producto o la lista de productos.');
        return;
    }

    const objetosComprados = listaDeCompras.map(nombreProducto => {
        return objetosDePrueba.find(objeto => objeto.nombre === nombreProducto);
    }).filter(objeto => objeto !== undefined);

    const nuevaListaDeObjetosComprados = objetosComprados;

    console.log("Nueva Lista de Objetos Comprados:", nuevaListaDeObjetosComprados);
}

comprarObjetos();
