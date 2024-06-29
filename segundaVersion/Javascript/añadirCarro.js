function recuperaCompraObjetos() {
  const selecArticulo = (localStorage.getItem("elementoSelecionado"));
  const listaDeCompras= JSON.parse(localStorage.getItem("listaDeCompras"))
 
  listaDeCompras.push(selecArticulo);
    localStorage.setItem("listaDeCompras", JSON.stringify (listaDeCompras));
  

}
if (!localStorage.getItem("listaDeCompras")) {
    localStorage.setItem("listaDeCompras", JSON.stringify([]));
  }