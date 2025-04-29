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
  //my config
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
