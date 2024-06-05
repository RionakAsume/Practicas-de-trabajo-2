if (!localStorage.getItem("Productos")){
    const productos = new Array;
    localStorage.setItem("Productos",JSON.stringify(productos));
}
let productos1 = JSON.parse(localStorage.getItem("Productos"))

/*incluyendo nombre,descripción, precio, categoría, proveedor y cantidad inicial en stock*/
function Agregar (){
    let nuevoProducto = new Array(8)
    nuevoProducto[0] = Number(prompt("Ingrese el codigo del nuevo producto"))
    nuevoProducto[1] = prompt("Ingrese el nombre")
    nuevoProducto[2] = prompt("Ingrese la descripción")
    nuevoProducto[3] = Number(prompt("Ingrese el precio"))
    nuevoProducto[4] = prompt("Ingrese la categoría")
    nuevoProducto[5] = prompt("Ingrese el proveedor")
    nuevoProducto[6] = Number(prompt("Ingrese la cantidad incial en stock"))
    productos1.push(nuevoProducto);
    localStorage.setItem("Productos",JSON.stringify(productos1))
    alert("El producto se agregó")
}
function borrar(){
    let codigo1 = Number(prompt("Ingrese el codigo del producto a eliminar"))
    console.log(codigo1);
    productos1.forEach((producto,index)=>{
        let contador = 0
        if (producto[0]==codigo1){
            productos1.splice(index,1);
            localStorage.setItem("Productos",JSON.stringify(productos1))
            alert("El producto se elimino")
            contador = 1
        }
    })
    if(contador==0){
        alert("No se encontro un producto con ese codigo")
    }
    
}
function modificar(){
    let codigo1 = Number(prompt("Ingrese el codigo del producto a modificar"))
    console.log(codigo1);
    productos1.forEach((producto,index)=>{
         let contador = 0
        if (producto[0]==codigo1){
            productos1[index][1] = prompt("Ingrese el nombre")
            productos1[index][2] = prompt("Ingrese la descripción")
            productos1[index][3] = Number(prompt("Ingrese el precio"))
            productos1[index][4] = prompt("Ingrese la categoría")
            productos1[index][5] = prompt("Ingrese el proveedor")
            productos1[index][6] = Number(prompt("Ingrese la cantidad incial en stock"))
            localStorage.setItem("Productos", JSON.stringify(productos1))
            alert("La propiedad se modifico")
            contador = 1
        }
    })
    if(contador==0){
        alert("No se encontro un producto con ese codigo")
    }
}
function mostrarProductos() {
    productos1 = JSON.parse(localStorage.getItem("Productos"))
    document.write('<table>')
    document.write('<tr><th>Codigo</th><th>Nombre</th><th>Descripción</th><th>Precio</th><th>Categoría</th><th>Proveedor</th><th>Stock</th></tr>')
    productos1.forEach((producto)=>{
        document.write("<tr><td>"+producto[0]+"</td>"+"<td>"+producto[1]+"</td>"+"<td>"+producto[2]+"</td>"+"<td>"+producto[3]+"</td>"+"<td>"+producto[4]+"</td>"+"<td>"+producto[5]+"</td>"+"<td>"+producto[6]+"</td></tr>")
    })
    document.write('</table>')
    document.write("La cantidad de productos mostrados son "+productos1.length+"<br>") 
    document.write('<a href="./index.html">Volver</a>')
}
