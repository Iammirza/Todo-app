
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvA5gWIohU0MGl_4_SjasVAtIveeqOjE",
  authDomain: "todo-app-a3e2f.firebaseapp.com",
  projectId: "todo-app-a3e2f",
  storageBucket: "todo-app-a3e2f.appspot.com",
  messagingSenderId: "656678210070",
  appId: "1:656678210070:web:7241b9155d5c5ac8cd8337",
  measurementId: "G-KJ3L7N69M5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
var db = firebase.firestore();
