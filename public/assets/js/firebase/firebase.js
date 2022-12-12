import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNxnA0OYDVUwaCuzHtl44IV7CYPc-c8zk",
    authDomain: "kuponner-18d61.firebaseapp.com",
    projectId: "kuponner-18d61",
    storageBucket: "kuponner-18d61.appspot.com",
    messagingSenderId: "358468393998",
    appId: "1:358468393998:web:a8f1723f1b13934ac3f05f",
    measurementId: "G-HLJBCE4RRZ"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);