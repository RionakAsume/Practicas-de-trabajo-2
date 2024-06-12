function crearDatos() {

    document.getElementById('productoForm').addEventListener('submit', function (event) {

        event.preventDefault();


        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const categoria = document.getElementById('categoria').value;
        const proveedor = document.getElementById('proveedor').value;
        const cantidadStock = document.getElementById('cantidadStock').value;
        const img = document.getElementById('img').value;

        const respuesta = document.querySelector(".mensaje")

       

        if (isNaN(precio) || isNaN(cantidadStock) || parseFloat(precio) <= 0 || parseInt(cantidadStock) <= 0) {
            respuesta.innerHTML = `Precio y cantidad de stock deben ser números válidos mayores a 0.`;
            return;
        }


        const nuevoProducto = {
            nombre,
            descripcion,
            precio,
            categoria,
            proveedor,
            cantidadStock,
            img
        };


        const recuperacionObjeto = JSON.parse(localStorage.getItem('Prueba')) || [];

        recuperacionObjeto.push(nuevoProducto);

        localStorage.setItem('Prueba', JSON.stringify(recuperacionObjeto));

        document.getElementById('productoForm').reset();
        respuesta.innerHTML = `se a añadido exitosamente`
    }

    );

}