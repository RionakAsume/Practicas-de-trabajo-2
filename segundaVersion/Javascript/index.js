
function tablas() {
    
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));
    const contenedor = document.querySelector(".padreGrid");
    const padrecontenedor = document.querySelector(".Sologrid")


    
    // Crear sección para productos de una categoría específica
    const categoriaEspecificaSection = document.createElement('section');
    categoriaEspecificaSection.className = 'categoria-especifica';
    contenedor.appendChild(categoriaEspecificaSection);

    // Crear sección para productos más vendidos
    const masVendidosSection = document.createElement('section');
    masVendidosSection.className = 'mas-vendidos';
    contenedor.appendChild(masVendidosSection);

    // Crear sección para buscador de productos
    const buscadorSection = document.createElement('section');
    buscadorSection.className = 'buscador';
    padrecontenedor.appendChild(buscadorSection);

    // Filtrar productos de una categoría específica (por ejemplo, 'Electrónica')
    const productosCategoriaEspecifica = recuperacionObjeto.filter(producto => producto.categoria === 'Alimentos');

    // Mostrar productos de la categoría específica en su sección correspondiente
    productosCategoriaEspecifica.forEach((element, i) => {
        const contGrid = document.createElement('div');
        contGrid.className = `contGrid`;
        contGrid.id = `elementos${i}`;
        contGrid.innerHTML = `
            <img class="imagenGrid" src="${element.img}" alt="Imagen de ${element.descripcion}">
            <div class="contendido">
                <p>Producto: ${element.nombre}</p>
                <p>Descripcion: ${element.descripcion}</p>
                <p>Precio: ${element.precio}</p>
                <p>Categoria: ${element.categoria}</p>
                <p>Proveedor: ${element.proveedor}</p>
                <p>cantidadStock: ${element.cantidadStock}</p>
            </div>
        `;
        categoriaEspecificaSection.appendChild(contGrid);
    });

    // Función para ordenar por productos más vendidos (simulado, puede variar según los datos disponibles)
    const productosMasVendidos = recuperacionObjeto.sort((a, b) => a.precio - b.precio).slice(0, 3); // Ejemplo: tomar los primeros 3 elementos como más vendidos

    // Mostrar productos más vendidos en su sección correspondiente
    productosMasVendidos.forEach((element, i) => {
        const contGrid = document.createElement('div');
        contGrid.className = `contGrid`;
        contGrid.id = `masVendidos${i}`;
        contGrid.innerHTML = `
            <img class="imagenGrid" src="${element.img}" alt="Imagen de ${element.descripcion}">
            <div class="contendido">
                <p>Producto: ${element.nombre}</p>
                <p>Descripcion: ${element.descripcion}</p>
                <p>Precio: ${element.precio}</p>
                <p>Categoria: ${element.categoria}</p>
                <p>Proveedor: ${element.proveedor}</p>
                <p>cantidadStock: ${element.cantidadStock}</p>
            </div>
        `;
        masVendidosSection.appendChild(contGrid);
    });

    // Crear sección para buscador de productos
    const buscadorInput = document.createElement('input');
    buscadorInput.type = 'text';
    buscadorInput.placeholder = 'Buscar productos...';
    buscadorSection.appendChild(buscadorInput);

    // Función para buscar productos por nombre
    const buscarProductos = (nombre) => {
        const resultados = recuperacionObjeto.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
        return resultados.slice(0, 6); // Mostrar hasta 6 resultados
    };

    // Evento para manejar la búsqueda cuando se escribe en el input
    buscadorInput.addEventListener('input', () => {
        const busqueda = buscadorInput.value.trim();
        const resultados = buscarProductos(busqueda);

        // Limpiar resultados anteriores
        buscadorSection.innerHTML = '';
        
        // Mostrar resultados de la búsqueda en su sección correspondiente
        resultados.forEach((element, i) => {
            const contGrid = document.createElement('div');
            contGrid.className = `contGrid`;
            contGrid.id = `busqueda${i}`;
            contGrid.innerHTML = `
                <img class="imagenGrid" src="${element.img}" alt="Imagen de ${element.descripcion}">
                <div class="contendido">
                    <p>Producto: ${element.nombre}</p>
                    <p>Descripcion: ${element.descripcion}</p>
                    <p>Precio: ${element.precio}</p>
                    <p>Categoria: ${element.categoria}</p>
                    <p>Proveedor: ${element.proveedor}</p>
                    <p>cantidadStock: ${element.cantidadStock}</p>
                </div>
            `;
            buscadorSection.appendChild(contGrid);
        });
    });

}

tablas();
