
function eliminarDatos() {
    const nombreProducto = localStorage.getItem('elementoSelecionado')
    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));
    const pError = document.querySelector('.mensajeError')
    console.log(nombreProducto)

    if (!recuperacionObjeto) {

        pError.innerHTML = `No se encontro los productos`
        setTimeout(() => {
           
            window.location.reload(); 
        }, 2000);
        return;
    }

    let productoEncontrado = false;


    for (let i = 0; i < recuperacionObjeto.length; i++) {
        if (recuperacionObjeto[i].nombre == nombreProducto) {
            recuperacionObjeto.splice(i, 1);
            localStorage.setItem("Prueba", JSON.stringify(recuperacionObjeto));
            productoEncontrado = true;
            break;
        }
    }

    if(!nombreProducto){
        pError.innerHTML = `No se a selecionado ningun producto`
        setTimeout(() => {
            pError.innerHTML = ``
        },1500) // 1.5 segundos de retraso
        
    }

    if (productoEncontrado) {
        pError.innerHTML = `El producto se ha eliminado`;
        localStorage.removeItem('elementoSelecionado')
        setTimeout(() => {
            // recargar la página después de un corto retraso para permitir que el mensaje se muestre
            window.location.reload(); 
        }, 1000); // 1.0 segundos de retraso
    } else {
        pError.innerHTML = `Ya no existe el producto que se seleciono`;
        setTimeout(() => {
            pError.innerHTML = ``
        },2000) // 2.0 segundos de retraso
    }

    if(recuperacionObjeto.length===0){
        pError.innerHTML = `Ya no existen productos`
        localStorage.removeItem('Prueba')
        setTimeout(() => {
            window.location.reload(); 
        },2000) // 2.0 segundos de retraso
        return;
    }

}   