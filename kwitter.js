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




function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name",user_name);

    window.location = "kwitter_room.html"

    document.getElementById("welcome").value = "Welcome" + user_name;
}

