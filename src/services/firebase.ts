import { initializeApp } from "firebase/app";
import { getAuth } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAR4qJqJ05lmZUJUI7q-rUfGih5WHE4d5U",
  authDomain: "auth-mp.firebaseapp.com",
  projectId: "auth-mp",
  storageBucket: "auth-mp.appspot.com",
  messagingSenderId: "1046472012582",
  appId: "1:1046472012582:web:5038cc9192ef7c24a907e7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)