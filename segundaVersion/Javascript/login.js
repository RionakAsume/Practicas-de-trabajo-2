document.querySelector('#btnParaLogear').addEventListener('click',Logear)

function Logear(event){

    event.preventDefault();

    registrados = JSON.parse(localStorage.getItem("Registrados"))

    mail = document.querySelector('#mail1').value
    contrasenia = document.querySelector('#contrasenia1').value
    
    let contador = 0
    if(mail==registrados[0][0]&&contrasenia==registrados[0][1]){
        location.href="../pages/mostrartotalGrid.html"//Aca se debe colocar la direccion de la pagina del crud
    }else{
        registrados.forEach((cuenta)=>{
            console.log(cuenta[0],cuenta[1])
            if (cuenta[0]==mail&&cuenta[1]==contrasenia){
                contador = 1
                alert("se logio exitosamente")
                location.href="../pages/index.html"//Aca se debe colocar la direccion de la pagina para los usuarios
                
                
            }
        })
        if(contador==0){
            alert("mail o contraseña incorrectos")
        }
    }
    
}
