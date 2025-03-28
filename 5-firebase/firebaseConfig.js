import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  getAuth,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBN83Rjyu-Fpy4aFzCWRz2ZiE50UINLnSg",
  authDomain: "codetalks-d66ed.firebaseapp.com",
  projectId: "codetalks-d66ed",
  storageBucket: "codetalks-d66ed.firebasestorage.app",
  messagingSenderId: "154493877427",
  appId: "1:154493877427:web:5c48d2311285d41ebc44c6",
  measurementId: "G-CJRL9YYXWL",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getApps().length
  ? getAuth(app)
  : initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    });

const db = getFirestore(app);

export { auth, db };
export default app;
