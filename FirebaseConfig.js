import * as firebase from 'firebase';
import '@firebase/firestore';

// need to run: npm install --save firebase
// We will use the JS SDK with React Native


const firebaseConfig = {
  apiKey: "AIzaSyBcvYQSI4T48aLlyLLuSzEflCzyu4dxCSU",
  authDomain: "wait-beta-v0-1.firebaseapp.com",
  databaseURL: "https://wait-beta-v0-1-default-rtdb.firebaseio.com",
  projectId: "wait-beta-v0-1",
  storageBucket: "wait-beta-v0-1.appspot.com",
  messagingSenderId: "1038395856117",
  appId: "1:1038395856117:web:b2efbf3337c87f6cf121bc",
  measurementId: "G-9TY8K8HGK1"
};

let app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const firestore = firebase.firestore(app);
export const auth = app.auth();
export const storage = firebase.storage();
