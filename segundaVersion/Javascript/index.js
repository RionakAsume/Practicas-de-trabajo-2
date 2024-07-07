function tablas() {

    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));
    const contenedor = document.querySelector(".padreGrid");
    const padrecontenedor = document.querySelector(".Sologrid")

    //funcion para selecionar un producto
    const Selecionador = (nombre) => {
        const selecion = document.querySelector('.nombreData').value = nombre

        localStorage.setItem("elementoSelecionado", (selecion))


    }

    // Crear sección para productos de una categoría específica
    const categoriaEspecificaSection = document.createElement('section');
    categoriaEspecificaSection.className = 'categoria-especifica';
    contenedor.appendChild(categoriaEspecificaSection);
    const padrecontGrid = document.createElement('div');
    padrecontGrid.className = 'padrecontGrid';

    const h2 = document.createElement('div');
    h2.className = `h2`;
    h2.innerHTML = `<h2 class="animacion-de-texto">Categoria Alimentos</h2>`;
    categoriaEspecificaSection.appendChild(h2);
    categoriaEspecificaSection.appendChild(padrecontGrid);
    const productosCategoriaEspecifica = recuperacionObjeto.filter(producto => producto.categoria === 'Alimentos');



    // Crear sección para productos más barato
    const masBaratoSection = document.createElement('section');
    masBaratoSection.className = 'mas-barato';
    contenedor.appendChild(masBaratoSection);
    const padrecontGridbarato = document.createElement('div');
    padrecontGridbarato.className = 'padrecontGrid';
    const h3 = document.createElement('div');
    h3.className = `h2`;
    h3.innerHTML = `<h2 class="animacion-de-texto">Mas Barato</h2>`;
    masBaratoSection.appendChild(h3);
    masBaratoSection.appendChild(padrecontGridbarato);

    // Crear sección para buscador de productos
    const buscadorSection = document.createElement('section');
    buscadorSection.className = 'buscador';
    contenedor.appendChild(buscadorSection);

    // Filtrar productos de una categoría específica (por ejemplo, 'Electrónica')


    // Mostrar productos de la categoría específica en su sección correspondiente
    productosCategoriaEspecifica.forEach((element, i) => {

        const contGrid = document.createElement('div');
        contGrid.className = `contGrid`;
        contGrid.id = `elementos${i}`;
        contGrid.innerHTML = `
            <img class="imagenGrid" src="${element.img}" alt="Imagen de ${element.descripcion}">
            <div class="contendido">
                <h3>Producto: ${element.nombre}</h3>
                <p>Descripcion: ${element.descripcion}</p>
                <p>Precio: ${element.precio}</p>
                <p>Categoria: ${element.categoria}</p>
                <p>Proveedor: ${element.proveedor}</p>
                <p>cantidadStock: ${element.cantidadStock}</p>
            </div>
        `;


        padrecontGrid.appendChild(contGrid);
        //funcion para selecionar un producto
        contGrid.addEventListener("click", () => {
            Selecionador(element.nombre)
        })
        contGrid.tabIndex = i


    });

    // Función para ordenar por productos más vendidos (simulado, puede variar según los datos disponibles)
    const productosMasBaratos = recuperacionObjeto.sort((a, b) => a.precio - b.precio).slice(0, 3); // Ejemplo: tomar los primeros 3 elementos como más vendidos


    // Mostrar productos más baratos en su sección correspondiente
    productosMasBaratos.forEach((element, i) => {
        const contGridbarato = document.createElement('div');
        contGridbarato.className = `contGrid`;
        contGridbarato.id = `masVendidos${i}`;
        contGridbarato.innerHTML = `
            <img class="imagenGrid" src="${element.img}" alt="Imagen de ${element.descripcion}">
            <div class="contendido">
                <h3>Producto: ${element.nombre}</h3>
                <p>Descripcion: ${element.descripcion}</p>
                <p>Precio: ${element.precio}</p>
                <p>Categoria: ${element.categoria}</p>
                <p>Proveedor: ${element.proveedor}</p>
                <p>cantidadStock: ${element.cantidadStock}</p>
            </div>
        `;
        padrecontGridbarato.appendChild(contGridbarato);
        //funcion para selecionar un producto
        contGridbarato.addEventListener("click", () => {
            Selecionador(element.nombre)
        })
        contGridbarato.tabIndex = i


    });
    // Crear sección para buscador de productos
    const buscadorInput = document.createElement('input');
    buscadorInput.type = 'text';
    buscadorInput.placeholder = 'Buscar productos...';

    // Contenedor para los resultados de la búsqueda
    const resultadosContainer = document.createElement('div');
    resultadosContainer.className="resultadoContainer"


    buscadorSection.appendChild(buscadorInput);
    buscadorSection.appendChild(resultadosContainer);

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
        resultadosContainer.innerHTML = '';

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
            resultadosContainer.appendChild(contGrid);

            // Función para seleccionar un producto
            contGrid.addEventListener("click", () => {
                Selecionador(element.nombre);
            });

            contGrid.tabIndex = i;
        });
    });




}

tablas();