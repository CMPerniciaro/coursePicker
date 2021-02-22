import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDJp8d3j6yFJMQmDGF_qvNHrvtUGi7rQg",
    authDomain: "coursepicker-ee931.firebaseapp.com",
    databaseURL: "https://coursepicker-ee931-default-rtdb.firebaseio.com",
    projectId: "coursepicker-ee931",
    storageBucket: "coursepicker-ee931.appspot.com",
    messagingSenderId: "689176964352",
    appId: "1:689176964352:web:8d999acafef4425a3e57e5",
    measurementId: "G-9M1805XYKD"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };