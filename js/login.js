function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username === "Joey" && password === "VivaEspaña"){
        window.location = "index.html"; // Redirecting to other page.
        return true;
    }
    else{
        location.reload(true);      //Refresh page
        /*
        attempt --;// Decrementing by one.
        alert("You have "+attempt+" ");

        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;

            return false;
        }*/
    }
}
