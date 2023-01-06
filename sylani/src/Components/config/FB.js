import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCUSlTKfl88QNpDjrXWbR49NgtnkUSnx3c",
  authDomain: "todo-list-a838e.firebaseapp.com",
  projectId: "todo-list-a838e",
  storageBucket: "todo-list-a838e.appspot.com",
  messagingSenderId: "312291650820",
  appId: "1:312291650820:web:b33f2ecea3a6ce00147451"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export {
    auth ,
    db ,
    storage
}