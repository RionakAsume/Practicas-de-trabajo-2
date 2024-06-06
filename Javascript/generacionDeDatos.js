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
        }
    ];
    return productos;

}


// Esto solo se tiene que ejecutar una vez (Investigar como hacerlo)

if (!localStorage.getItem("Prueba")) {
    localStorage.setItem("Prueba", JSON.stringify(datosPrueba()))
}



