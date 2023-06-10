import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyA6XhNVzsrxytjPjo2YE1OS8nrcoCimy6s",
  authDomain: "sola-a3dc7.firebaseapp.com",
  projectId: "sola-a3dc7",
  storageBucket: "sola-a3dc7.appspot.com",
  messagingSenderId: "251057253793",
  appId: "1:251057253793:web:19ec7f26a8640ad394afe0",
};

const app = initializeApp(firebaseConfig);

// Export other Firebase services like firestore and auth
export const firestore = getFirestore(app);
export const auth = getAuth(app);
