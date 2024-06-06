document.querySelector('#btnParaRegistrar').addEventListener('click',datosaRegistrar)
document.querySelector('#btnParaLogear').addEventListener('click',Logear)
function datosaRegistrar(){
    let cuenta = new Array(2)
    mail = document.querySelector('#mail').value
    contrasenia = document.querySelector('#contrasenia').value
    
    cuenta[0] = mail
    cuenta[1]= contrasenia
    registrados.push(cuenta)
    
    localStorage.setItem("Registrados", JSON.stringify(registrados))
    alert("mail y contraseña registrados")

}
function Logear(){
    registrados = JSON.parse(localStorage.getItem("Registrados"))

    mail = document.querySelector('#mail1').value
    contrasenia = document.querySelector('#contrasenia1').value
    
    let contador = 0
    registrados.forEach((cuenta)=>{
        console.log(cuenta[0],cuenta[1])
        if (cuenta[0]==mail&&cuenta[1]==contrasenia){
            contador = 1
            alert("Inicio Sesion")
            
            
        }
    })
    if(contador==0){
        alert("mail o contraseña incorrectos")
    }
}
if (!localStorage.getItem("Registrados")){
    const registrados = new Array;
    localStorage.setItem("Registrados",JSON.stringify(registrados));
}
let registrados = JSON.parse(localStorage.getItem("Registrados"))