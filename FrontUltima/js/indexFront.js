document.addEventListener('DOMContentLoaded', function() {
    // Array para almacenar los productos del carrito
    let carrito = [];

    // Función para actualizar el carrito en el almacenamiento local
    function actualizarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    // Función para cargar el carrito desde el almacenamiento local
    function cargarCarrito() {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            carrito = JSON.parse(carritoGuardado);
        }
    }

    // Función para renderizar el carrito en la página del carrito
    function renderizarCarrito() {
        const carritoContainer = document.querySelector('.carrito');
        carritoContainer.innerHTML = '';

        carrito.forEach((producto, index) => {
            const productoCarrito = document.createElement('div');
            productoCarrito.classList.add('producto-carrito');

            productoCarrito.innerHTML = `
                <div class="producto-detalles">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <p>Precio: $${producto.precio}</p>
                    </div>
                </div>
                <button class="btn-eliminar" data-index="${index}">Eliminar</button>
            `;

            carritoContainer.appendChild(productoCarrito);
        });

        // Agregar eventos de clic a los botones de eliminar
        const botonesEliminar = document.querySelectorAll('.btn-eliminar');
        botonesEliminar.forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                carrito.splice(index, 1);
                actualizarCarrito();
                renderizarCarrito();
            });
        });

        // Actualizar el total
        const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
        document.querySelector('.total h3').textContent = `Total: $${total}`;
    }

    // Función para agregar un producto al carrito
    function agregarAlCarrito(producto) {
        const productoExistente = carrito.find(p => p.nombre === producto.nombre);
        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push(producto);
        }
        actualizarCarrito();
    }

    // Cargar el carrito al iniciar la página
    cargarCarrito();

    // Detectar la página actual para renderizar el carrito si es necesario
    if (document.body.classList.contains('pagina-carrito')) {
        renderizarCarrito();
    }

    // Agregar eventos a los botones de "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll('.btn-agregar');
    botonesAgregar.forEach(button => {
        button.addEventListener('click', function() {
            const producto = {
                nombre: this.parentElement.querySelector('h3').textContent,
                imagen: this.parentElement.querySelector('img').src,
                cantidad: 1,
                precio: 50 // Suponiendo un precio fijo de $50 por producto (esto debería ajustarse según sea necesario)
            };
            agregarAlCarrito(producto);
        });
    });
});
