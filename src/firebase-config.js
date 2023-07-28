
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAANgqxI63nsCHDVN_rdr-nL9qcUfkZS0U",
  authDomain: "connectverse-7709d.firebaseapp.com",
  projectId: "connectverse-7709d",
  storageBucket: "connectverse-7709d.appspot.com",
  messagingSenderId: "147698094139",
  appId: "1:147698094139:web:907c3c0c00d8cbdab98c1e",
  measurementId: "G-WLT8E51DYZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      console.log(name);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      window.location.reload(true)
    })
    .catch((error) => {
      console.log(error);
    });
};