import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLTAtq7oX50ZhD005C4djtVQiaPObTmWo",
  authDomain: "ieee-rmk-2028-f37ae.firebaseapp.com",
  databaseURL: "https://ieee-rmk-2028-f37ae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ieee-rmk-2028-f37ae",
  storageBucket: "ieee-rmk-2028-f37ae.firebasestorage.app",
  messagingSenderId: "798368558094",
  appId: "1:798368558094:web:84b9dbf298ae077cf6e05f"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);