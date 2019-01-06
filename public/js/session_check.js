function initApp(){
    //Listener para AuthStateChanged
    firebase.auth().onAuthStateChanged(function(user) {
       console.log(user);
       if (user) {
            console.log("Success!");
            var displayName = user.displayName;
            var email = user.email;
            var uid = user.uid;

            console.log(uid);
            console.log(displayName);
            console.log(email);
       }
       else {
            console.log("Not logged in");
       }
    });
}

window.onload = function() {
    initApp();
    console.log("does stuff");
    /**ref.onAuth(function(authData){
        if(authData){
            console.log("User " + authData.uid + "is logged in with " + authData.provider);
        }
        else{
            console.log("User is logged out");
        }
    });*/

};
