// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ4gSr-RRpO-VXKbUA3SmenWJa-fYHIz8",
  authDomain: "bookfindr-428508.firebaseapp.com",
  projectId: "bookfindr-428508",
  storageBucket: "bookfindr-428508.appspot.com",
  messagingSenderId: "746014705878",
  appId: "1:746014705878:web:effeb9fc803088983ae177",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
