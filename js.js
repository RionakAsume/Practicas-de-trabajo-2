function datosPrueba() {

    const productos = [
        {
            nombre: "Producto 1",
            descripcion: "Descripción del producto 1",
            precio: 10.99,
            categoria: "Categoría 1",
            proveedor: "Proveedor A",
            cantidadStock: 100
        },
        {
            nombre: "Producto 2",
            descripcion: "Descripción del producto 2",
            precio: 15.49,
            categoria: "Categoría 2",
            proveedor: "Proveedor B",
            cantidadStock: 200
        },
        {
            nombre: "Producto 3",
            descripcion: "Descripción del producto 3",
            precio: 9.99,
            categoria: "Categoría 1",
            proveedor: "Proveedor A",
            cantidadStock: 150
        },
        {
            nombre: "Producto 4",
            descripcion: "Descripción del producto 4",
            precio: 20.00,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 75
        },
        {
            nombre: "Producto 5",
            descripcion: "Descripción del producto 5",
            precio: 8.50,
            categoria: "Categoría 1",
            proveedor: "Proveedor D",
            cantidadStock: 300
        },
        {
            nombre: "Producto 6",
            descripcion: "Descripción del producto 6",
            precio: 22.30,
            categoria: "Categoría 2",
            proveedor: "Proveedor B",
            cantidadStock: 120
        },
        {
            nombre: "Producto 7",
            descripcion: "Descripción del producto 7",
            precio: 14.75,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 80
        },
        {
            nombre: "Producto 8",
            descripcion: "Descripción del producto 8",
            precio: 11.00,
            categoria: "Categoría 1",
            proveedor: "Proveedor A",
            cantidadStock: 60
        },
        {
            nombre: "Producto 9",
            descripcion: "Descripción del producto 9",
            precio: 19.99,
            categoria: "Categoría 2",
            proveedor: "Proveedor D",
            cantidadStock: 140
        },
        {
            nombre: "Producto 10",
            descripcion: "Descripción del producto 10",
            precio: 13.49,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 90
        },
        {
            nombre: "Producto 11",
            descripcion: "Descripción del producto 11",
            precio: 17.99,
            categoria: "Categoría 2",
            proveedor: "Proveedor B",
            cantidadStock: 110
        },
        {
            nombre: "Producto 12",
            descripcion: "Descripción del producto 12",
            precio: 5.99,
            categoria: "Categoría 1",
            proveedor: "Proveedor A",
            cantidadStock: 250
        },
        {
            nombre: "Producto 13",
            descripcion: "Descripción del producto 13",
            precio: 23.49,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 70
        },
        {
            nombre: "Producto 14",
            descripcion: "Descripción del producto 14",
            precio: 16.75,
            categoria: "Categoría 2",
            proveedor: "Proveedor D",
            cantidadStock: 95
        },
        {
            nombre: "Producto 15",
            descripcion: "Descripción del producto 15",
            precio: 12.30,
            categoria: "Categoría 1",
            proveedor: "Proveedor B",
            cantidadStock: 130
        },
        {
            nombre: "Producto 16",
            descripcion: "Descripción del producto 16",
            precio: 18.50,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 85
        },
        {
            nombre: "Producto 17",
            descripcion: "Descripción del producto 17",
            precio: 21.99,
            categoria: "Categoría 2",
            proveedor: "Proveedor A",
            cantidadStock: 110
        },
        {
            nombre: "Producto 18",
            descripcion: "Descripción del producto 18",
            precio: 9.49,
            categoria: "Categoría 1",
            proveedor: "Proveedor D",
            cantidadStock: 190
        },
        {
            nombre: "Producto 19",
            descripcion: "Descripción del producto 19",
            precio: 24.99,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 60
        },
        {
            nombre: "Producto 20",
            descripcion: "Descripción del producto 20",
            precio: 13.99,
            categoria: "Categoría 2",
            proveedor: "Proveedor B",
            cantidadStock: 105
        },
        {
            nombre: "Producto 21",
            descripcion: "Descripción del producto 21",
            precio: 6.75,
            categoria: "Categoría 1",
            proveedor: "Proveedor A",
            cantidadStock: 240
        },
        {
            nombre: "Producto 22",
            descripcion: "Descripción del producto 22",
            precio: 22.49,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 75
        },
        {
            nombre: "Producto 23",
            descripcion: "Descripción del producto 23",
            precio: 15.30,
            categoria: "Categoría 2",
            proveedor: "Proveedor D",
            cantidadStock: 115
        },
        {
            nombre: "Producto 24",
            descripcion: "Descripción del producto 24",
            precio: 10.50,
            categoria: "Categoría 1",
            proveedor: "Proveedor B",
            cantidadStock: 170
        },
        {
            nombre: "Producto 25",
            descripcion: "Descripción del producto 25",
            precio: 19.75,
            categoria: "Categoría 3",
            proveedor: "Proveedor C",
            cantidadStock: 95
        }
    ];
    return productos;

}




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



