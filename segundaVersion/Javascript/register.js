document.querySelector('#btnParaRegistrar').addEventListener('click',datosaRegistrar)


function datosaRegistrar(event) {

    event.preventDefault();

    let cuenta = new Array(2);
    let registrados = JSON.parse(localStorage.getItem("Registrados")) || [];


    let mail = document.querySelector('#mail').value;
    let contrasenia = document.querySelector('#contrasenia').value;


    if (!mail || !contrasenia) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    console.log("Mail:", mail);
    console.log("Contraseña:", contrasenia);

    cuenta[0] = mail;
    cuenta[1] = contrasenia;

    
    registrados.push(cuenta);

   
    localStorage.setItem("Registrados", JSON.stringify(registrados));


    alert("Mail y contraseña registrados");

    console.log("Redirigiendo a la página de login...");
    window.location.href = "../pages/login.html";
}


if (!localStorage.getItem("Registrados")) {
    const registrados = new Array();
    localStorage.setItem("Registrados", JSON.stringify(registrados));
}