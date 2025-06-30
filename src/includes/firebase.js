// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  CACHE_SIZE_UNLIMITED
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4EiIn0skkhgd_iNNdALVe5rbahIDBKSc",
  authDomain: "ptpipn-strona-test.firebaseapp.com",
  projectId: "ptpipn-strona-test",
  storageBucket: "ptpipn-strona-test.firebasestorage.app",
  messagingSenderId: "953750345540",
  appId: "1:953750345540:web:306f10fd9852dec62ae911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  })
})
const db = getFirestore(app)
const postsCollection = collection(db, "posts");
const setupCollection = collection(db, "setup");
export { db, postsCollection, setupCollection };
