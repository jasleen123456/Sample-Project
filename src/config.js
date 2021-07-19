import firebase from 'firebase';

var firebaseConfig = {
   apiKey: "AIzaSyDVmQzWzFim_JEV5TwRLZ1cKPdZj07hs3E",
    authDomain: "project-1fd4b.firebaseapp.com",
    projectId: "project-1fd4b",
    storageBucket: "project-1fd4b.appspot.com",
    messagingSenderId: "806100731041",
    appId: "1:806100731041:web:fa8b6660cb6be192e7dce0"
  };


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const db= firebase.firestore()
export {db}