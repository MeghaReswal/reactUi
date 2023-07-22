// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFP1NKEMS-ViJEFsKctWKv8WLvgAKp1N0",
  authDomain: "loginauth-f8914.firebaseapp.com",
  projectId: "loginauth-f8914",
  storageBucket: "loginauth-f8914.appspot.com",
  messagingSenderId: "825949858880",
  appId: "1:825949858880:web:f9cb4ddb721310201943a5",
  measurementId: "G-MRFSB35KT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
