function add_user() {
    
    var username=document.getElementById("user_name").value;

    if (username=="") {
        window.alert("Username must not be empty");
    }
    else {
    localStorage.setItem("user/name", username);
    window.location="Kwitter_room.html";
    }
}