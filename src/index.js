import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyDddWL_0lVNGElQtZotEpSRrmjUXqOiY80",
        authDomain: "mimgames.firebaseapp.com",
        projectId: "mimgames",
        storageBucket: "mimgames.appspot.com",
        messagingSenderId: "728239335536",
        appId: "1:728239335536:web:0676ad07fb0da5eb156cb5"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <App />
);