function changeToEdit(){
    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    edit_form.style.display = "block";
    prof_form.style.display = "none";

}

function changeToProf(){

    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    edit_form.style.display = "none";
    prof_form.style.display = "block";
}


function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {
       console.log(user);

       if (user) {

            log_butt = document.getElementById("login_button");
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
                    window.location = "index.html"
                });

            });

            //initProf();
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

