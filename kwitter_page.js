var firebase = {
    apiKey: "AIzaSyA-Cefy8n1kitVl1d2RUZoBUzengNHdTX8",
    authDomain: "lets-chat-22455.firebaseapp.com",
    databaseURL: "https://lets-chat-22455-default-rtdb.firebaseio.com",
    projectId: "lets-chat-22455",
    storageBucket: "lets-chat-22455.appspot.com",
    messagingSenderId: "66451277521",
    appId: "1:66451277521:web:240e6dc02aa5863a6c67f0"
  };
  
  var app = initializeApp(firebase);



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name = message_data['name'];
 message = message_data['message'];
 like = message_data['like'];
 name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>"+ message +"</h4>";
 like_button = "<h4 class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";

 row= name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;


//End code
 } });  }); }
getData();

function send()
{
 message = document.getElementById("msg").value;
 console.log(message);
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
 console.log(message);
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");