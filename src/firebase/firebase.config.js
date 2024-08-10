// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHGIt8WGp5fY0FrP4GUTGVSfZGTc_yjzA",
  authDomain: "createuserbyemailpassword.firebaseapp.com",
  projectId: "createuserbyemailpassword",
  storageBucket: "createuserbyemailpassword.appspot.com",
  messagingSenderId: "627284572929",
  appId: "1:627284572929:web:04fecf42d6744274bd7900",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
