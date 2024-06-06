//Parte del Reed

function tablas() {

    const pruebaDiv = document.querySelector("DIV")
    const padre = document.createElement('section');

    padre.classList.add(`prueba`)

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
    const asdasd = JSON.parse(localStorage.getItem("Prueba"));
    asdasd.forEach(element => {
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

//parte del create

function crearDatos() {
    const NombreProduc = prompt("Ingrese el NombreProduc :");
    const Descripcion = prompt("Ingrese la Descripcion");
    const Precio = prompt("Ingrese Precio");
    const Categoria = prompt("Ingrese la Categoria :");
    const Proveedor = prompt("Ingrese la proveedor ");
    const CantidadInicialStock = prompt("Ingrese el CantidadInicialStock");

    const asdasd = JSON.parse(localStorage.getItem("Prueba"));

    const nuevaPropiedad = { NombreProduc, Descripcion, Precio, Categoria, Proveedor, CantidadInicialStock };
    asdasd.push(nuevaPropiedad);

    localStorage.setItem("Prueba", JSON.stringify(asdasd))
}

//parte del delete


//parte del update

