// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7PrbQP-mR93Zo8BssWuxcxsSjxzw8sH4",
  authDomain: "sesac-pium.firebaseapp.com",
  projectId: "sesac-pium",
  storageBucket: "sesac-pium.appspot.com",
  messagingSenderId: "467121029241",
  appId: "1:467121029241:web:29e36a8d4390a9566c14a8",
  measurementId: "G-JMKTQ8BBE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
