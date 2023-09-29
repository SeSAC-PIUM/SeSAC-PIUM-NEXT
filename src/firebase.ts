import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
