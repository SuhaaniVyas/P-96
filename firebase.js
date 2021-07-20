// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBuWzExCdjXNw6exEkIMDgaiT_cnzqHA_c",
    authDomain: "lets-chat-web-app-2a6f7.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2a6f7-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2a6f7",
    storageBucket: "lets-chat-web-app-2a6f7.appspot.com",
    messagingSenderId: "607625585221",
    appId: "1:607625585221:web:fe6ba899bf21093595792c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function send() {
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push ({
 name: user_name,
 message: msg,
 like: 0
 });
 document.getElementById("msg").value = "";
}
