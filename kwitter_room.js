
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

