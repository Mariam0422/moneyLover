import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  onSnapshot,
  arrayUnion,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  arrayRemove
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRJK9L7Ae0v6zy0ubxx2-9KVo3sB4QyS8",
  authDomain: "moneylover-3d638.firebaseapp.com",
  projectId: "moneylover-3d638",
  storageBucket: "moneylover-3d638.appspot.com",
  messagingSenderId: "603285467121",
  appId: "1:603285467121:web:3befd1454d24d06e271e50",
  measurementId: "G-QCCNZ8HM43",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
  app,
  auth,
  db,
  setDoc,
  getDoc,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  arrayRemove
};
