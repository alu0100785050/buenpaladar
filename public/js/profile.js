function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {

       if (user) {

            var prof_name = document.getElementById("prof_name");
            var prof_surn = document.getElementById("prof_surn");
            var prof_mail = document.getElementById("prof_email");
            var prof_desc = document.getElementById("prof_description");

            log_butt = document.getElementById("login_button");
            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            console.log(uid);
            console.log(displayName);
            console.log(email);

            SignedDisplay();
            prof_name.innerHTML = displayName;
            prof_mail.innerHTML = email;

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

