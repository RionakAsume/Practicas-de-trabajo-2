function tablasbusqueda() {
    const pruebaDiv = document.querySelector("DIV")
    const padre = document.createElement('section');

    padre.classList.add(`tablaB`)

    padre.innerHTML = `
  <table>
      <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Categoria</th>
          <th>Proveedor</th>
          <th>cantidadStock</th>           
      </tr>
  </table>
`;
    pruebaDiv.appendChild(padre);


    const table = padre.querySelector('table');
    const busquedaencontrada = JSON.parse(localStorage.getItem('busqueda'));
    busquedaencontrada.forEach(element => {
        const trs = document.createElement('tr');
        trs.innerHTML = `
     <td>${element.nombre}</td>
      <td>${element.descripcion}</td>
      <td>${element.precio}</td>
      <td>${element.categoria}</td>
      <td>${element.proveedor}</td>
      <td>${element.cantidadStock}</td>     
      `;
        table.appendChild(trs);
    });

}
//es lo que esta haciendo el boton de generar
function generarYEliminarTablas1() {

    const selecionarSection = document.querySelector(".tablaB");
    if (!selecionarSection) {

        tablasbusqueda()

    } else {
        selecionarSection.innerHTML = ""
        selecionarSection.remove();

    }


};

function busqueda() {
    const datos = JSON.parse(localStorage.getItem("Prueba"));
    const busqueda1 = prompt("Ingrese el nombre de Producto o categoria");



    let resultado = [];
    let encontrado = false;


    for (let i = 0; i < datos.length; i++) {
        if (datos[i].nombre === busqueda1 || datos[i].categoria === busqueda1) {
            resultado.push(datos[i]);
            encontrado = true;
        }
    }

    if (encontrado) {
        localStorage.setItem('busqueda', JSON.stringify(resultado));

    } else {
        alert("No existe el dato ingresado");

    }

}
// if(busqueda()){
//     tablasbusqueda();
// }