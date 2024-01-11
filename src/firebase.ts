import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXyhnBn_c1sr_R9O3XM9tyyFawlfgcmIQ",
  authDomain: "pori-sns.firebaseapp.com",
  projectId: "pori-sns",
  storageBucket: "pori-sns.appspot.com",
  messagingSenderId: "180277115171",
  appId: "1:180277115171:web:17d0bbd5fc982b12c7f496",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
