function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {
       console.log(user);
       log_butt = document.getElementById("login_button");
       if (user) {
            console.log("Success!");
            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            console.log(uid);
            console.log(displayName);
            console.log(email);

            log_butt.innerHTML = "Sign Out";
            log_butt.addEventListener('click', e => {
                //When user is logged in, clicking button redirects to self
                // plus logout
                firebase.auth().signOut();

            });
       }
       else {
            console.log("Not logged in");
            log_butt.innerHTML = "Log In";
       }
    });
}

window.onload = function() {
    initApp();
};
