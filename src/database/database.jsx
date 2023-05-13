import firebase from "@react-native-firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-28_LZ4zymwEmB2OiYnZLpefwrg8qcrg",
  authDomain: "eestecchalenge2023db.firebaseapp.com",
  projectId: "eestecchalenge2023db",
  storageBucket: "eestecchalenge2023db.appspot.com",
  messagingSenderId: "944934297041",
  appId: "1:944934297041:web:7b29fc87cd0808b3f8d4f0",
  measurementId: "G-9R3H58ED56",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
