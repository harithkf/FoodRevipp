import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0uPNdrb2ZVNNQHXgwgfJv_YZDgkoE1fQ",
    authDomain: "iium-food-canteen.firebaseapp.com",
    databaseURL: "https://iium-food-canteen.firebaseio.com",
    projectId: "iium-food-canteen",
    storageBucket: "iium-food-canteen.appspot.com",
    messagingSenderId: "789776759269",
    appId: "1:789776759269:web:8ffc6f2bc9b1671ec2170c",
    measurementId: "G-V5Y4015552"
  };
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();

