import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCgbqHz_y3ppS22018Hwc8HF9gurtMlW7Y",
    authDomain: "book-santa-6b515.firebaseapp.com",
    projectId: "book-santa-6b515",
    storageBucket: "book-santa-6b515.appspot.com",
    messagingSenderId: "837818873051",
    appId: "1:837818873051:web:2cd68b68a284c7e84588fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();