document.querySelector('#btnParaBorrar').addEventListener('click',borrarProducto);
document.querySelector('#btnParaModificar').addEventListener('click',modificarProducto)
document.querySelector('#btnParaAgregar').addEventListener('click',agregarProducto)
function borrarProducto(){
    let codigoaBorrar = "";

    codigoaBorrar = document.querySelector('#codigoaBorrar').value
    
}
function agregarProducto(){
    let productoPorAgregar=[]
    codigo1 = document.querySelector('#codigoaAgregar').value
    nombre1 = document.querySelector('#nombre').value
    descripcion1 = document.querySelector('#descripcion').value
    precio1 = document.querySelector('#precio').value
    categoria1 = document.querySelector('#categoria').value
    proveedor1 = document.querySelector('#proveedor').value
    cantidad1 = document.querySelector('#cantidad').value

    productoPorAgregar.push(codigo1)
    productoPorAgregar.push(nombre1)
    productoPorAgregar.push(descripcion1)
    productoPorAgregar.push(precio1)
    productoPorAgregar.push(categoria1)
    productoPorAgregar.push(proveedor1)
    productoPorAgregar.push(cantidad1)
    

}
function modificarProducto(){
    let productoPorModificar=[]
    codigo2 = document.querySelector('#codigoaModificar').value
    nombre2 = document.querySelector('#nombreNuevo').value
    descripcion2 = document.querySelector('#descripcionNueva').value
    precio2 = document.querySelector('#precioNuevo').value
    categoria2 = document.querySelector('#categoriaNueva').value
    proveedor2 = document.querySelector('#proveedorNuevo').value
    cantidad2 = document.querySelector('#cantidadNueva').value

    productoPorModificar.push(codigo2)
    productoPorModificar.push(nombre2)
    productoPorModificar.push(descripcion2)
    productoPorModificar.push(precio2)
    productoPorModificar.push(categoria2)
    productoPorModificar.push(proveedor2)
    productoPorModificar.push(cantidad2)
    console.log(productoPorModificar)

}