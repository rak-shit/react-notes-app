import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUpI28jsvXzjykJvH22X7nhHsgZyUVOWs",
    authDomain: "notes-app-b02b2.firebaseapp.com",
    databaseURL: "https://notes-app-b02b2.firebaseio.com",
    projectId: "notes-app-b02b2",
    storageBucket: "notes-app-b02b2.appspot.com",
    messagingSenderId: "927590782151",
    appId: "1:927590782151:web:8d0c441573add5759f5ae2",
    measurementId: "G-F97KYYFPV4"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
