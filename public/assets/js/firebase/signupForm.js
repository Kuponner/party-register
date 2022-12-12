import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = signUpForm["signup-name"].value;
  const email = signUpForm["signup-email"].value;
  const role = signUpForm["signup-role"].value;
  const password = signUpForm["signup-password"].value;

  try {

    // Register Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);


    if (userCredential) {
      // Show welcome message
      showMessage("Bienvenido! " + userCredential.user.email);

      // Register DB
      const asyncPostCall = async () => {
        try {
          const response = await fetch('https://testing-kuponner-production.up.railway.app/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              email: email,
              role: role,
              image: "https://graph.facebook.com/121466707420903/picture"
            })
          });

          if (response) {
            window.location.href = 'https://testing-kuponner-production.up.railway.app/';
          }

        } catch (error) {   
          console.log(error);
          window.location.href = 'https://testing-kuponner-production.up.railway.app/';
        }
      };

      // Call register DB
      setTimeout(asyncPostCall, 2500);

      // reset the form
      signUpForm.reset();
    }

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("El correo electrónico ya se encuentra registrado", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña debil", "error")
    } else if (error.code) {
      showMessage("Algo salió mal, intenté nuevamente", "error")
    }
  }

});