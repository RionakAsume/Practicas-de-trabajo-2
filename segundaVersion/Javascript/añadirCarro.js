function recuperaCompraObjetos() {
  const selecArticulo = (localStorage.getItem("elementoSelecionado"));
  const listaDeCompras= JSON.parse(localStorage.getItem("listaDeCompras"))
 
  listaDeCompras.push(selecArticulo);
    localStorage.setItem("listaDeCompras", JSON.stringify (listaDeCompras));
  
  alert(`Se añadio ${selecArticulo} al carro de compras`)
}
if (!localStorage.getItem("listaDeCompras")) {
    localStorage.setItem("listaDeCompras", JSON.stringify([]));
  }