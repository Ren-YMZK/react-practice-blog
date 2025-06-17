import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFO2_gSkI9VQPylr5RIU2CzvUPzcgpSWc",
  authDomain: "blog-8f0ea.firebaseapp.com",
  projectId: "blog-8f0ea",
  storageBucket: "blog-8f0ea.firebasestorage.app",
  messagingSenderId: "1013544486740",
  appId: "1:1013544486740:web:a4da5ce5de5a4979806ac1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
