// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDg4HX4QPdbUgSDppVGBsf1iICcWTLnUeI",
  authDomain: "pragminibar2.firebaseapp.com",
  databaseURL: "https://pragminibar2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pragminibar2",
  storageBucket: "pragminibar2.firebasestorage.app",
  messagingSenderId: "410822083844",
  appId: "1:410822083844:web:39d466335d37f383c3fc51",
  measurementId: "G-W3G5WZE0S6"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

import {getDatabase, ref, get, set, child, update, remove} from "firebase/database";

// Esempio di funzione per scrivere un oggetto in "test/"
export async function Scrivi(path = "utenti/id/", ogettoUtente) {
    const myRef = ref(db, path);
    return set(myRef, ogettoUtente);
  }
  
//Esempio di funzione per leggere i dati in tempo reale
export async function Leggi(path = "utenti/id/") {
    const myRef = ref(db, path);
    //get legge solo una volta
    const data = await get(myRef);
    if(data.exists()) {
      return data.val();
    } else {
      return null;
    }
  }