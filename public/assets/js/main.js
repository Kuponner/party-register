import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase/firebase.js";


// list for auth state changes
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const emailAuth = user.email;

        try {
            const response = await fetch('https://testing-kuponner-production.up.railway.app/logged', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailAuth

                })
            });

            if (response) {
                console.log('User logged in!');
            }


        } catch (error) {
            console.log(error);
        }
    } else {
        
        try {
            const response = await fetch('https://testing-kuponner-production.up.railway.app/logged', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: null

                })
            });

            if (response) {
                console.log('User not logged in');
            }

        } catch (error) {
            console.log(error);
        }


    }
});
