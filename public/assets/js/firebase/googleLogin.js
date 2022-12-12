import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  //Pre loader
  document.getElementById("googleLogin").innerHTML='<div class="spinner-grow text-primary"></div>';

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    
    if (credentials) {
      // Register DB
      const registerUser = async () => {
        const response = await fetch('https://testing-kuponner-production.up.railway.app/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: credentials.user.displayName,
            email: credentials.user.email,
            role: "user",
            image: credentials.user.photoURL
          })
        });

        if (response) {
          console.log('User verified successfully');
        }

      };

      // Call register DB
      registerUser();

      // show welcome message
      showMessage("¡Bienvenido! " + credentials.user.displayName);

      // Redirect to the home page
      function redirect() {
        window.location.href = 'https://testing-kuponner-production.up.railway.app/';
      };

      // Call redirect to the home page
      setTimeout(redirect, 1500);
    }

  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
  }
});