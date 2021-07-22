import firebase from "firebase/app";
import "firebase/database";

const config = {
  // API KEYS
  apiKey: "AIzaSyCYWSMue7WSvNIaPBhfjovWe5KOQQY4jL4",
  authDomain: "vue-chat-aa480.firebaseapp.com",
  projectId: "vue-chat-aa480",
  storageBucket: "vue-chat-aa480.appspot.com",
  messagingSenderId: "55398420640",
  appId: "1:55398420640:web:a564ee9218efef5351b9c5",
};

const db = firebase.initializeApp(config);
export default db;
