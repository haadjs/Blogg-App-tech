import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHjHzogkkul_Hg5eIEPJLdi1d6wdASpQ0",
  authDomain: "blog-app-tech.firebaseapp.com",
  projectId: "blog-app-tech",
  storageBucket: "blog-app-tech.firebasestorage.app",
  messagingSenderId: "210856741221",
  appId: "1:210856741221:web:0d13cb5c72bea757acb98c"
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

export default auth;