// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ347dLt1icpwX-Bp0BdCvTxlJYn0EgSw",
  authDomain: "motionwiz-30644.firebaseapp.com",
  projectId: "motionwiz-30644",
  storageBucket: "motionwiz-30644.appspot.com",
  messagingSenderId: "966664735724",
  appId: "1:966664735724:web:5a5e3fae04395451994ec9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export function to initialize firebase.
export const initFirebase = () => {
    return app;
}