import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase/firebase.js";

const logout = document.querySelector("#logout");

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await signOut(auth)
    window.location.href = 'https://testing-kuponner-production.up.railway.app/logout';
  } catch (error) {
    console.log(error)
  }
});