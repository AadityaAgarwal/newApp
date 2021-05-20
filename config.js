import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyAJGWmqRH6NQp7A2A22u1yAHUFrvmb_4x8",
  authDomain: "newapp2-ab16c.firebaseapp.com",
  projectId: "newapp2-ab16c",
  storageBucket: "newapp2-ab16c.appspot.com",
  messagingSenderId: "571435319541",
  appId: "1:571435319541:web:6e840d3eb8b89785b045bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();