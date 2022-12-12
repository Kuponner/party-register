import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#signin-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["signin-email"].value;
  const password = signInForm["signin-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);

    if (userCredentials) {
      // show welcome message
      showMessage("¡Bienvenido! " + userCredentials.user.email);

      // Redirect to the back page
      function redirect() {
        window.location.href = 'https://testing-kuponner-production.up.railway.app/';
      };

      setTimeout(redirect, 1500);

      // reset the form
      signInForm.reset();

    }

  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Contraseña incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("Correo electrónico no registrado", "error")
    } else {
      showMessage("Algo salió mal, intenté nuevamente", "error")
    }
  }
});