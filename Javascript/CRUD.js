//Parte del Read
//creacion de las tablas
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
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));
    recuperacionObjeto.forEach(element => {
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
function generarYEliminarTablas() {

    const selecionarSection = document.querySelector(".prueba");
    if (!selecionarSection) {

        tablas()

    } else {
        selecionarSection.innerHTML = ""
        selecionarSection.remove();

    }


};

//parte del create

function crearDatos() {

    document.getElementById('productoForm').addEventListener('submit', function (event) {

        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const categoria = document.getElementById('categoria').value;
        const proveedor = document.getElementById('proveedor').value;
        const cantidadStock = document.getElementById('cantidadStock').value;

        const nuevaPropiedad = {
            nombre,
            descripcion,
            precio,
            categoria,
            proveedor,
            cantidadStock
        };


        const recuperacionObjeto = JSON.parse(localStorage.getItem('Prueba')) || [];

        recuperacionObjeto.push(nuevaPropiedad);

        localStorage.setItem('Prueba', JSON.stringify(recuperacionObjeto));

        alert('Producto agregado exitosamente');


        document.getElementById('productoForm').reset();
    });

}


//parte del delete


function eliminarDatos() {
    const nombreProducto = prompt("Ingrese el Nombre del producto a eliminar");
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));

    if (!recuperacionObjeto) {
        alert("No hay productos para eliminar");
        return;
    }

    const productoEncontrado = false;


    for (let i = 0; i < recuperacionObjeto.length; i++) {
        if (recuperacionObjeto[i].nombre == nombreProducto) {
            recuperacionObjeto.splice(i, 1);
            localStorage.setItem("Prueba", JSON.stringify(recuperacionObjeto));
            alert("El producto se eliminó");
            productoEncontrado = true;
            break;
        }
    }

    if (!productoEncontrado) {
        alert("No se encontró un producto con ese nombre");
    }
}

//parte del update

function cambiarDatos() {
    const nombreProducto = prompt("Ingrese el Nombre del producto a modificar");
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));

    if (!recuperacionObjeto) {
        alert("No hay productos para modificar");
        return;
    }

    let productoEncontrado = false;

    for (let i = 0; i < recuperacionObjeto.length; i++) {
        if (recuperacionObjeto[i].nombre == nombreProducto) {
            const nuevaDescripcion = prompt("Ingrese la nueva Descripción:");
            const nuevoPrecio = prompt("Ingrese el nuevo Precio:");
            const nuevaCategoria = prompt("Ingrese la nueva Categoría:");
            const nuevoProveedor = prompt("Ingrese el nuevo Proveedor:");
            const nuevaCantidadInicialStock = prompt("Ingrese la nueva Cantidad Inicial en Stock:");

            recuperacionObjeto[i].descripcion = nuevaDescripcion;
            recuperacionObjeto[i].precio = parseFloat(nuevoPrecio);
            recuperacionObjeto[i].categoria = nuevaCategoria;
            recuperacionObjeto[i].proveedor = nuevoProveedor;
            recuperacionObjeto[i].cantidadStock = parseInt(nuevaCantidadInicialStock);

            productoEncontrado = true;
                       
            localStorage.setItem("Prueba", JSON.stringify(recuperacionObjeto));
            break;
        }
        
    }
}
