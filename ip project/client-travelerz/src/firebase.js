import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYYdURw6evJPV7v5V1hcsWCVKmXzlXxDI",
    authDomain: "travelerz-07.firebaseapp.com",
    projectId: "travelerz-07",
    storageBucket: "travelerz-07.appspot.com",
    messagingSenderId: "586774966815",
    appId: "1:586774966815:web:19846151920ddff3969b2a",
    measurementId: "G-3E8FZ1S224"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};