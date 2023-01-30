// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-MtYFcSUS0qzqPogqZCGpOl07uFw1_aY",
  authDomain: "dipro-teach.firebaseapp.com",
  projectId: "dipro-teach",
  storageBucket: "dipro-teach.appspot.com",
  messagingSenderId: "1073213612824",
  appId: "1:1073213612824:web:df7968db74d013f797b46d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// https://dev.to/chayti/firebase-hosting-setup-complete-issue-43cg