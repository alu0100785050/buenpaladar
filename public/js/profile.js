function changeToEdit(){
     var edit_surn = document.getElementById("edit_surn"); //
     var prof_surn = document.getElementById("prof_surn"); //
     var edit_desc = document.getElementById("edit_description"); //
     var prof_desc = document.getElementById("prof_description"); //

     save_butt = document.getElementById("change_to_prof"); //
     edit_butt = document.getElementById("change_to_edit"); //

     edit_surn.style.display = "block";
     edit_desc.style.display = "block";
     save_butt.style.display = "block";

     prof_surn.style.display = "none";
     prof_desc.style.display = "none";
     edit_butt.style.display = "none";

}

function changeToProf(){
    var edit_surn = document.getElementById("edit_surn"); //
    var prof_surn = document.getElementById("prof_surn"); //
    var edit_desc = document.getElementById("edit_description"); //
    var prof_desc = document.getElementById("prof_description"); //

    save_butt = document.getElementById("change_to_prof"); //
    edit_butt = document.getElementById("change_to_edit"); //

    edit_surn.style.display = "none";
    edit_desc.style.display = "none";
    save_butt.style.display = "none";

    prof_surn.style.display = "block";
    prof_desc.style.display = "block";
    edit_butt.style.display = "block";

}

function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {

       if (user) {

            var edit_surn = document.getElementById("edit_surn"); //
            var prof_name = document.getElementById("prof_name");
            var prof_surn = document.getElementById("prof_surn"); //
            var prof_mail = document.getElementById("prof_email");
            var edit_desc = document.getElementById("edit_description"); //
            var prof_desc = document.getElementById("prof_description"); //

            save_butt = document.getElementById("change_to_prof"); //
            edit_butt = document.getElementById("change_to_edit"); //
            log_butt = document.getElementById("login_button");

            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            SignedDisplay();
            prof_name.innerHTML = displayName;
            prof_mail.innerHTML = email;

            //Default display
            edit_surn.style.display = "none";
            edit_desc.style.display = "none";
            save_butt.style.display = "none";

            database.ref('/users/' + displayName).once('value').then(function(snapshot) {
                prof_surn.innerHTML = (snapshot.val() && snapshot.val().surName) || '--';
                prof_desc.innerHTML = (snapshot.val() && snapshot.val().desCription) || '--';
            });

            log_butt.addEventListener('click', e => {
                //When user is logged in, clicking button redirects to self
                // plus logout
                firebase.auth().signOut().then(function(){
                    window.location = "index.html"
                });

            });

       }
       else {
            console.log("Not logged in");
            window.location = 'login.html';
       }
    });
}

window.onload = function() {
    initApp();
};

