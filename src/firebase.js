
import firebase from 'firebase/compat/app'; // Import the compat version of firebase/app
import 'firebase/compat/auth'; // Import specific modules from firebase/compat

const firebaseConfig = {
  apiKey: "AIzaSyDtaLo93I4GOXx2ZIoIpKyqUPf1NifKjrE",
  authDomain: "signconnect-b4d50.firebaseapp.com",
  projectId: "signconnect-b4d50",
  storageBucket: "signconnect-b4d50.appspot.com",
  messagingSenderId: "511328946766",
  appId: "1:511328946766:web:dfbe116bd78158f20ed11f"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;