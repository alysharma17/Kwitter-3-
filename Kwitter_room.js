  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBUFA1R7T0FFLBAuVIn-DjjbqtCx9oTlCk",
    authDomain: "kwitter-d0c54.firebaseapp.com",
    databaseURL: "https://kwitter-d0c54-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0c54",
    storageBucket: "kwitter-d0c54.appspot.com",
    messagingSenderId: "485161509656",
    appId: "1:485161509656:web:bf51d0e7e5a9994966b46d",
    measurementId: "G-9329V6HPHB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey; //shows room names
 //Start code
 console.log("Room Name- " + Room_names);
 var row="<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
//End code
 });});}
getData();
function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_chat.html";
}
function add_room() {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
 purpose:"adding room name"

});




localStorage.setItem("room name", room_name);
window.location="kwitter_chat.html";
}
function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location="index.html"; 

}