function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username === "Joey" && password === "VivaEspaña"){
        window.location = "index.html"; // Redirecting to other page.
        return true;
    }
    else{
        location.reload(true);      //Refresh page
    }
}
