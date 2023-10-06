// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9A4SBMOVYFqmQ9Ubzj0AcqFAWYqKBrG4",
  authDomain: "donation-campaign-777ce.firebaseapp.com",
  projectId: "donation-campaign-777ce",
  storageBucket: "donation-campaign-777ce.appspot.com",
  messagingSenderId: "875203890742",
  appId: "1:875203890742:web:5d739624a569c1e7ac9297",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;
