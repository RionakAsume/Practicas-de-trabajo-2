function datosPrueba() {

    const alumnos = [{
        NombreProduc: "Collar Asteca",
        Descripcion: "piedra tallada a mano por un indigena",
        Precio: 458,
        Categoria: "Si",
        Proveedor: "Un Ramdon",
        CantidadInicialStock: 10,

    },
    {
        NombreProduc: "Collar Asteca",
        Descripcion: "piedra tallada a mano por un indigena",
        Precio: 458,
        Categoria: "Si",
        Proveedor: "Un Ramdon",
        CantidadInicialStock: 10,

    },
    {
        NombreProduc: "Collar Asteca",
        Descripcion: "piedra tallada a mano por un indigena",
        Precio: 458,
        Categoria: "Si",
        Proveedor: "Un Ramdon",
        CantidadInicialStock: 10,

    }]
    return alumnos

}




function tablas() {

    const pruebaDiv = document.querySelector("DIV")
    const padre = document.createElement('section');

    padre.classList.add(`prueba`)

    padre.innerHTML = `
    <table>
        <tr>
            <th>NombreProduc</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Categoria/th>
            <th>Proveedor</th>
            <th>CantidadInicialStock</th>
           
            
        </tr>
    </table>
`;
    pruebaDiv.appendChild(padre);


    const table = padre.querySelector('table');
    const asdasd = JSON.parse(localStorage.getItem("Prueba"));
    asdasd.forEach(element => {
        const trs = document.createElement('tr');
        trs.innerHTML = `
        <td>${element.NombreProduc}</td>
        <td>${element.Descripcion}</td>
        <td>${element.Precio}</td>
        <td>${element.Categoria}</td>
        <td>${element.Proveedor}</td>
        <td>${element.CantidadInicialStock}</td>
     
   
        `;
        table.appendChild(trs);
    });

}

function actializarDatos() {
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










function botonPrueba() {

    const selecionarSection = document.querySelector(".prueba");
    if (!selecionarSection) {

        tablas()

    } else {
        selecionarSection.innerHTML = ""
        selecionarSection.remove();

    }


};


// Esto solo se tiene que ejecutar una vez (Investigar como hacerlo)

if (!localStorage.getItem("Prueba")) {
    localStorage.setItem("Prueba", JSON.stringify(datosPrueba()))
}



