import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyDddWL_0lVNGElQtZotEpSRrmjUXqOiY80",
        authDomain: "mimgames.firebaseapp.com",
        projectId: "mimgames",
        storageBucket: "mimgames.appspot.com",
        messagingSenderId: "728239335536",
        appId: "1:728239335536:web:0676ad07fb0da5eb156cb5"
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db