import { auth } from "../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Login users using their Email and Password
export const emailPasswordLogin = async (mail, pass) => {
  const res = await signInWithEmailAndPassword(auth, mail, pass).catch(() =>
    alert("Incorrect Email or Password")
  );

  return res;
};

// Login users using their Google account
export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();

  const res = await signInWithPopup(auth, provider).catch(() =>
    alert("Error occurred while logging in with Google")
  );

  return res;
};

// Login users using their Facebook account
export const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();

  const res = await signInWithPopup(auth, provider).catch(() =>
    alert("Error occurred while logging in with Facebook")
  );

  return res;
};
