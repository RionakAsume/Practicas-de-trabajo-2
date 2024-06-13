function datosPrueba() {

    const productos = [
        {
            nombre: "Jabón Artesanal",
            descripcion: "Jabón hecho a mano con ingredientes naturales",
            precio: 10.99,
            categoria: "Higiene",
            proveedor: "Proveedor A",
            cantidadStock: 100,
            img: "https://cdn.shopify.com/s/files/1/0229/0839/files/vender_jabon.jpg?v=1656493262"
        },
        {
            nombre: "Vela Aromática",
            descripcion: "Vela perfumada hecha a mano con cera de soja",
            precio: 12.99,
            categoria: "Decoración",
            proveedor: "Proveedor B",
            cantidadStock: 80,
            img: "https://acdn.mitiendanube.com/stores/608/725/products/2d60aaf7-8b06-4940-be90-64cdd561faed-c1b769790773386ade16988604911821-1024-1024.jpeg"
        },
        {
            nombre: "Maceta de Cerámica",
            descripcion: "Maceta artesanal pintada a mano",
            precio: 15.49,
            categoria: "Jardinería",
            proveedor: "Proveedor C",
            cantidadStock: 50,
            img: "https://acdn.mitiendanube.com/stores/001/689/211/products/ceramica-comun-b1-c99725698e4961006116496963464921-640-0.jpg"
        },
        {
            nombre: "Cartera de Cuero",
            descripcion: "Cartera artesanal de cuero genuino",
            precio: 45.00,
            categoria: "Moda",
            proveedor: "Proveedor D",
            cantidadStock: 30,
            img: "https://dcdn.mitiendanube.com/stores/001/026/581/products/dsc_66651-acabae18b1e9d970b616433170392883-640-0.jpg"
        },
        {
            nombre: "Cojín Bordado",
            descripcion: "Cojín hecho a mano con bordados tradicionales",
            precio: 25.00,
            categoria: "Hogar",
            proveedor: "Proveedor E",
            cantidadStock: 60,
            img: "https://i.pinimg.com/736x/28/c7/2e/28c72ecc89e27863646b62b484d898cd.jpg"
        },
        {
            nombre: "Collar de Piedras",
            descripcion: "Collar artesanal con piedras semipreciosas",
            precio: 20.99,
            categoria: "Accesorios",
            proveedor: "Proveedor F",
            cantidadStock: 70,
            img: "https://dcdn.mitiendanube.com/stores/852/812/products/pendulo_piedradelaluna_barlina-style1-bedb807818c5b8a53416031349801753-640-0.png"
        },
        {
            nombre: "Mermelada Casera",
            descripcion: "Mermelada artesanal de frutas orgánicas",
            precio: 8.99,
            categoria: "Alimentos",
            proveedor: "Proveedor G",
            cantidadStock: 120,
            img: "https://www.comedera.com/wp-content/uploads/2016/06/apple-jam-5543763_1280.jpg"
        },
        {
            nombre: "Miel Orgánica",
            descripcion: "Miel artesanal cosechada localmente",
            precio: 14.50,
            categoria: "Alimentos",
            proveedor: "Proveedor H",
            cantidadStock: 90,
            img: "https://mielbioflora.mx/cdn/shop/articles/meilbioflora-diferencias-entre-miel-tradicional-y-meil-organica.jpg?v=1625413509"
        },
        {
            nombre: "Taza de Cerámica",
            descripcion: "Taza artesanal pintada a mano",
            precio: 9.99,
            categoria: "Hogar",
            proveedor: "Proveedor I",
            cantidadStock: 110,
            img: "https://http2.mlstatic.com/D_NQ_NP_970127-MLA50730434901_072022-O.webp"
        },
        {
            nombre: "Pan de Masa Madre",
            descripcion: "Pan artesanal de masa madre",
            precio: 5.99,
            categoria: "Alimentos",
            proveedor: "Proveedor J",
            cantidadStock: 130,
            img: "https://cuk-it.com/wp-content/uploads/2023/08/thumb02-3-1024x576.jpg"
        }
    ];
    
    return productos;

}


// Esto solo se tiene que ejecutar una vez (Investigar como hacerlo)

if (!localStorage.getItem("Prueba")) {
    localStorage.setItem("Prueba", JSON.stringify(datosPrueba()))
}



