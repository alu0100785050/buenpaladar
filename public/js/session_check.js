function nonSignedDisplay() {
    prof_butt = document.getElementById("profile_button");
    log_butt = document.getElementById("login_button");

    log_butt.innerHTML = "Log In";
    prof_butt.style.display = "none";
}

function SignedDisplay(){
    prof_butt = document.getElementById("profile_button");
    log_butt = document.getElementById("login_button");

    log_butt.innerHTML = "Sign Out";
    prof_butt.style.display = "block";
}

function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {
       console.log(user);

       if (user) {

            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            console.log(uid);
            console.log(displayName);
            console.log(email);

            SignedDisplay();

            log_butt.addEventListener('click', e => {
                //When user is logged in, clicking button redirects to self
                // plus logout
                firebase.auth().signOut().then(function(){
                    location.reload();
                });

            });
       }
       else {
            console.log("Not logged in");
            nonSignedDisplay();
       }
    });
}

window.onload = function() {
    initApp();
};
