// made to configure firebase inside our app
import firebase from 'firebase/app'

const config=
{
    apiKey: "AIzaSyCNlGMNgAwwh_Y_dw5Y86b9t2lDB6jEa04",
    authDomain: "chat-app-64671.firebaseapp.com",
    databaseURL: "https://chat-app-64671-default-rtdb.firebaseio.com",
    projectId: "chat-app-64671",
    storageBucket: "chat-app-64671.appspot.com",
    messagingSenderId: "694656220239",
    appId: "1:694656220239:web:cc3d6f848e674a7646be3a"
  };

 const app= firebase.initializeApp(config);

 