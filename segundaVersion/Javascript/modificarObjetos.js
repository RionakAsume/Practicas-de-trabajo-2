function generarFormulario() {
    const contenedor = document.querySelector(".padreFormulario");
    const section = document.createElement('section');
    contenedor.appendChild(section);
    section.className = `contform`;

    section.innerHTML = `
          
        <div class="formparacrear">
            <form id="productoForm">
              
                <label for="descripcion">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" ><br>

                <label for="precio">Precio:</label>
                <input type="number" id="precio" name="precio" ><br>

                <label for="categoria">Categoría:</label>
                <input type="text" id="categoria" name="categoria" ><br>

                <label for="proveedor">Proveedor:</label>
                <input type="text" id="proveedor" name="proveedor" ><br>

                <label for="cantidadStock">Cantidad Inicial en Stock:</label>
                <input type="number" id="cantidadStock" name="cantidadStock" ><br>

                <label for="cantidadStock">Imagen:</label>
                <input type="text" id="img" name="img" ><br>

                <Button type="submit" onclick="botondepush()">Modificar</Button>
            </form>
         </div>
        `;

}


function botondepush() {

    const nombreProducto = localStorage.getItem('elementoSelecionado')


    const recuperacionObjeto = JSON.parse(localStorage.getItem("Prueba"));




    document.getElementById('productoForm').addEventListener('submit', function (event) {

        event.preventDefault();



        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const categoria = document.getElementById('categoria').value;
        const proveedor = document.getElementById('proveedor').value;
        const cantidadStock = document.getElementById('cantidadStock').value;
        const img = document.getElementById('img').value;







        if (isNaN(precio) || isNaN(cantidadStock) || parseFloat(precio) <= 0 || parseInt(cantidadStock) <= 0) {
            alert(`Precio y cantidad de stock deben ser números válidos mayores a 0.`);
            return;
        }


        for (let i = 0; i < recuperacionObjeto.length; i++) {
            if (recuperacionObjeto[i].nombre == nombreProducto) {
                if (descripcion != "") {
                    recuperacionObjeto[i].descripcion = descripcion;
                }
                if (precio != "") {
                    recuperacionObjeto[i].precio = parseFloat(precio);
                }
                if (categoria != "") {
                    recuperacionObjeto[i].categoria = categoria;
                }
                if (proveedor != "") {

                    recuperacionObjeto[i].proveedor = proveedor;
                }
                if (cantidadStock != "") {
                    recuperacionObjeto[i].cantidadStock = parseInt(cantidadStock);
                }
                if (img != "") {
                    recuperacionObjeto[i].img = img
                }

                localStorage.setItem("Prueba", JSON.stringify(recuperacionObjeto));
                break;
            }

        }

        document.getElementById('productoForm').reset();

        setTimeout(() => {
            // recargar la página después de un corto retraso para permitir que el mensaje se muestre
            window.location.reload(); 
        }, 1000); // 1.0 segundos de retraso

    }
    );
}


