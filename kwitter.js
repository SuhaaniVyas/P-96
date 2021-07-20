// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuWzExCdjXNw6exEkIMDgaiT_cnzqHA_c",
    authDomain: "lets-chat-web-app-2a6f7.firebaseapp.com",
    projectId: "lets-chat-web-app-2a6f7",
    storageBucket: "lets-chat-web-app-2a6f7.appspot.com",
    messagingSenderId: "607625585221",
    appId: "1:607625585221:web:fe6ba899bf21093595792c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    
}
