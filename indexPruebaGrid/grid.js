
function tablas() {
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));
    const contenedor = document.querySelector(".padreGrid");

    // Crear un grid section solo una vez
    const grid = document.createElement('section');
    grid.className = 'grid';
    contenedor.appendChild(grid);

    // Crear una contGrid para cada objeto en recuperacionObjeto
    recuperacionObjeto.forEach(element => {
        const contGrid = document.createElement('div');
        contGrid.className = 'contGrid';

        contGrid.innerHTML = `
            <img src="${element.img}" alt="Imagen de ${element.descripcion}">
            <div class="contendido">
                <p>Producto: ${element.nombre}</p>
                <p>Descripcion: ${element.descripcion}</p>
                <p>Precio: ${element.precio}</p>
                <p>Categoria: ${element.categoria}</p>
                <p>Proveedor: ${element.proveedor}</p>
                <p>cantidadStock: ${element.cantidadStock}</p>
            </div>
        `;

        grid.appendChild(contGrid);
    });
}

tablas();


