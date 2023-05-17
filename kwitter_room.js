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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><br>"
 

//End code
      });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value; 

    localStorage.setItem("Room Name",room_name);
    
    firebase.database().ref("/").child(room_name).update({
        Room_Name : user_name
    });

    window.location.href = "kwitter_page.html";
    
}

function redirectToRoomName()
{
      room_name = document.getElementById("room_name").value; 
      localStorage.setItem("Room_name",room_name);

      window.location.href = "kwitter_page.html";


}
function logout(){
      localStorage.removeItem("user_name",user_name);
      localStorage.removeItem("room_name",room_name);
      window.location.href = "index.html";
}



