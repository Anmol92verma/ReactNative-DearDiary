import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBw7q_cYlbtxA0Fnmq9v8fb_5kpjv1XDl8",
    authDomain: "deardiary-c32bb.firebaseapp.com",
    databaseURL: "https://deardiary-c32bb.firebaseio.com",
    projectId: "deardiary-c32bb",
    storageBucket: "deardiary-c32bb.appspot.com",
    messagingSenderId: "608743003776"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp