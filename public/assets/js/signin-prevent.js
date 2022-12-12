import './firebase/signinForm.js'
import './firebase/googleLogin.js'
import './firebase/facebookLogin.js'

// SingIn Form
const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener("submit", (e) => {

    let emailVerification = document.getElementById("signin-email").value;
    let passVerification = document.getElementById("signin-password").value;

    const emailregExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const passregExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;

    const emailOk = emailregExp.test(emailVerification);
    const passOk = passregExp.test(passVerification);

    if (emailOk == true) {
        document.getElementById("signin-msgemail").style.display = "none";
        document.getElementById("signin-email").style.borderColor = "green";
    }
    else {
        e.preventDefault();
        document.getElementById("signin-msgemail").style.display = "block";
        document.getElementById("signin-email").style.borderColor = "red";
        document.getElementById("signin-msgemail").innerHTML = "Formato de correo electrónico incorrecto.";
        document.getElementById("signin-email").value = '';

    }

    if (passOk == true) {
        document.getElementById("signin-msgpass").style.display = "none";
        document.getElementById("signin-password").style.borderColor = "green";

    }
    else {
        e.preventDefault();
        document.getElementById("signin-msgpass").style.display = "block";
        document.getElementById("signin-password").style.borderColor = "red";
        document.getElementById("signin-msgpass").innerHTML = "Ingresé una contraseña valida.";
        document.getElementById("signin-password").value = '';
    }

    if (emailOk == true && passOk == true) {
        document.getElementById("loader-submit").innerHTML='<div class="spinner-grow text-white"></div>';
        document.getElementById("signin-email").style.borderColor = "green";
        document.getElementById("signin-password").style.borderColor = "green";

        // reset the form
        signInForm.reset();

    }

});
