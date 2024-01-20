// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTKbeakTbhLi5WlqYZac59DbNJASaVMkI",
    authDomain: "chat-room-8c376.firebaseapp.com",
    databaseURL: "https://chat-room-8c376-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-8c376",
    storageBucket: "chat-room-8c376.appspot.com",
    messagingSenderId: "926918690502",
    appId: "1:926918690502:web:feabad99e5f10f49c379c7",
    measurementId: "G-CWJPQZBZWM"
  };

  let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;