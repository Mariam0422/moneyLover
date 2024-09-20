import { getFirestore, setDoc, getDoc, getDocs, doc, collection, updateDoc, arrayUnion} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRJK9L7Ae0v6zy0ubxx2-9KVo3sB4QyS8",
  authDomain: "moneylover-3d638.firebaseapp.com",
  projectId: "moneylover-3d638",
  storageBucket: "moneylover-3d638.appspot.com",
  messagingSenderId: "603285467121",
  appId: "1:603285467121:web:3befd1454d24d06e271e50",
  measurementId: "G-QCCNZ8HM43"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {
    app, auth, db,  setDoc, getDoc, doc
}
