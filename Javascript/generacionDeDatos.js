function datosPrueba() {

    const productos = [
        {
            nombre: "Jabón Artesanal",
            descripcion: "Jabón hecho a mano con ingredientes naturales",
            precio: 10.99,
            categoria: "Higiene",
            proveedor: "Proveedor A",
            cantidadStock: 100
        },
        {
            nombre: "Vela Aromática",
            descripcion: "Vela perfumada hecha a mano con cera de soja",
            precio: 12.99,
            categoria: "Decoración",
            proveedor: "Proveedor B",
            cantidadStock: 80
        },
        {
            nombre: "Maceta de Cerámica",
            descripcion: "Maceta artesanal pintada a mano",
            precio: 15.49,
            categoria: "Jardinería",
            proveedor: "Proveedor C",
            cantidadStock: 50
        },
        {
            nombre: "Cartera de Cuero",
            descripcion: "Cartera artesanal de cuero genuino",
            precio: 45.00,
            categoria: "Moda",
            proveedor: "Proveedor D",
            cantidadStock: 30
        },
        {
            nombre: "Cojín Bordado",
            descripcion: "Cojín hecho a mano con bordados tradicionales",
            precio: 25.00,
            categoria: "Hogar",
            proveedor: "Proveedor E",
            cantidadStock: 60
        },
        {
            nombre: "Collar de Piedras",
            descripcion: "Collar artesanal con piedras semipreciosas",
            precio: 20.99,
            categoria: "Accesorios",
            proveedor: "Proveedor F",
            cantidadStock: 70
        },
        {
            nombre: "Mermelada Casera",
            descripcion: "Mermelada artesanal de frutas orgánicas",
            precio: 8.99,
            categoria: "Alimentos",
            proveedor: "Proveedor G",
            cantidadStock: 120
        },
        {
            nombre: "Miel Orgánica",
            descripcion: "Miel artesanal cosechada localmente",
            precio: 14.50,
            categoria: "Alimentos",
            proveedor: "Proveedor H",
            cantidadStock: 90
        },
        {
            nombre: "Taza de Cerámica",
            descripcion: "Taza artesanal pintada a mano",
            precio: 9.99,
            categoria: "Hogar",
            proveedor: "Proveedor I",
            cantidadStock: 110
        },
        {
            nombre: "Pan de Masa Madre",
            descripcion: "Pan artesanal de masa madre",
            precio: 5.99,
            categoria: "Alimentos",
            proveedor: "Proveedor J",
            cantidadStock: 130
        }
    ];
    
    return productos;

}


// Esto solo se tiene que ejecutar una vez (Investigar como hacerlo)

if (!localStorage.getItem("Prueba")) {
    localStorage.setItem("Prueba", JSON.stringify(datosPrueba()))
}



