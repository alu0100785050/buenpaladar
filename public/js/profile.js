function changeToEdit(uid){
    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    edit_form.style.display = "block";
    prof_form.style.display = "none";

}

function changeToProf(uid){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var surn = document.getElementById("surn").value;
    var description = document.getElementById("descripcion").value;

    //Check len, etc...

    var data = {
        displayName : name,
        eMail : email,
        surName: surn,
        desCription: description
    }

    var newUserInfo = db.collection(uid).doc();

    newUserInfo.set(data).then(function(){

        console.log("Success!");

        prof_form = document.getElementById("profile_form");
        edit_form = document.getElementById("edit_form");

        prof_form.style.display = "block";
        edit_form.style.display = "none";

    }).catch(function(error){
        console.error("Error setting document: ", error);
    });
    //then

}

function manageProfile(uid){

    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    prof_form.style.display = "block";
    edit_form.style.display = "none";

    document.getElementById("change_to_prof").addEventListener('click', e => {
        changeToProf(uid);
    });

    document.getElementById("change_to_edit").addEventListener('click', e => {
        changeToEdit(uid);
    });

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

            manageProfile(uid);
       }
       else {
            console.log("Not logged in");
            nonSignedDisplay();
            window.location = 'index.html';
       }

    });


}

window.onload = function() {
    initApp();
};

