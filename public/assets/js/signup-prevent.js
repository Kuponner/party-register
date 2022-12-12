import './firebase/signupForm.js'
import './firebase/googleSignup.js'
import './firebase/facebookSignup.js'

// SingUp Form 
const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", (e) => {

    let nameVerification = document.getElementById("signup-name").value;
    let emailVerification = document.getElementById("signup-email").value;
    let passVerification = document.getElementById("signup-password").value;

    const emailregExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const passregExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
    const nameregExp = /(-?([A-Z].\s)?([A-Z][a-z]+)\s?)+([A-Z]'([A-Z][a-z]+))?/g;

    const emailOk = emailregExp.test(emailVerification);
    const passOk = passregExp.test(passVerification);
    const nameOk = nameregExp.test(nameVerification);


    if (nameOk == true) {
        document.getElementById("signup-msgname").style.display = "none";
        document.getElementById("signup-name").style.borderColor = "green";
    }
    else {
        e.preventDefault();
        document.getElementById("signup-msgname").style.display = "block";
        document.getElementById("signup-name").style.borderColor = "red";
        document.getElementById("signup-msgname").innerHTML = "Ingresé nombre de usuario valido. Sin caracteres especiales.";
        document.getElementById("signup-name").value = '';

    }

    if (emailOk == true) {
        document.getElementById("signup-msgemail").style.display = "none";
        document.getElementById("signup-email").style.borderColor = "green";
    }
    else {
        e.preventDefault();
        document.getElementById("signup-msgemail").style.display = "block";
        document.getElementById("signup-email").style.borderColor = "red";
        document.getElementById("signup-msgemail").innerHTML = "Formato de correo electrónico incorrecto.";
        document.getElementById("signup-email").value = '';

    }

    if (passOk == true) {
        document.getElementById("signup-msgpassword").style.display = "none";
        document.getElementById("signup-msgpass").style.display = "none";
        document.getElementById("signup-password").style.borderColor = "green";

    }
    else {
        e.preventDefault();
        document.getElementById("signup-msgpassword").style.display = "none";
        document.getElementById("signup-msgpass").style.display = "block";
        document.getElementById("signup-password").style.borderColor = "red";
        document.getElementById("signup-msgpass").innerHTML = "Debe contener al menos 6 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.";
        document.getElementById("signup-password").value = '';
    }

    if (nameOk == true && emailOk == true && passOk == true) {
        document.getElementById("loader-submit").innerHTML='<div class="spinner-grow text-white"></div>';
        document.getElementById("signin-email").style.borderColor = "green";
        document.getElementById("signin-password").style.borderColor = "green";

        // reset the form
        signUpFormInForm.reset();

    }

});




