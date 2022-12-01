// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpK_G5QxL7cc4z59HBn_Rf1xPURLxoU8Q",
  authDomain: "hospital-management-d218b.firebaseapp.com",
  projectId: "hospital-management-d218b",
  storageBucket: "hospital-management-d218b.appspot.com",
  messagingSenderId: "303464171076",
  appId: "1:303464171076:web:c358f000d2d11d01839e11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;