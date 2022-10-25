
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from '@firebase/firestore';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCztvp76ZGYf4_HJAMElMs3AUZn-dNj9As",
    authDomain: "village-stories.firebaseapp.com",
    projectId: "village-stories",
    storageBucket: "village-stories.appspot.com",
    messagingSenderId: "413660056823",
    appId: "1:413660056823:web:49840d54a066eb180057f2",
    measurementId: "G-Y25WRQG49Z"
  };
  
  const app = initializeApp(firebaseConfig);

   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);