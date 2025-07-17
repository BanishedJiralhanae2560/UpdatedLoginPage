import { auth, createUserWithEmailAndPassword } from './firebase.js';

// Handle registration form submission
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Register the user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Successfully registered
        console.log("Registered as:", user.email);
        alert("Registration successful!");
        
        // Redirect to login page using Flask route
        window.location.href = "/login";

    } catch (error) {
        console.error("Error during registration:", error.message);
        alert("Error: " + error.message);
    }
});