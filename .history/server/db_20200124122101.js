import * from 'firebase'
import firestore from 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyB5REOX5IZh58Ee2S0vdW9shSVwR1lXjrE",
  authDomain: "stackathon-2c6f1.firebaseapp.com",
  databaseURL: "https://stackathon-2c6f1.firebaseio.com",
  projectId: "stackathon-2c6f1",
  storageBucket: "stackathon-2c6f1.appspot.com",
  messagingSenderId: "463355984678",
  appId: "1:463355984678:web:6a9e8777acc99148705fe7",
  measurementId: "G-S1MB4LQ15W"
})

const db=firebase.firestore();

export default db;
