function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkpasswd(password, checkpass){
    //TODO: Checks if password and confirm_password are equal
    return (password === checkpass) ? true : false;
}

function sign(){

    var name = document.getElementById("name");
    var surn = document.getElementById("sur");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var checkpass = document.getElementById("checkpass");

    if(checkpasswd(checkpass.value, password.value)){
            if(validateEmail(email.value)){
                //Signup + error management
                //ALSO: auto-error handling includes email repetition in the database (i think)
                firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log('Error: ' + errorCode + ', ' + errorMessage);
                    email.style.color = "coral";
                    password.style.color = "coral";
                    checkpass.style.color = "coral";
                });
            }
            else {
                //Error management (email format incorrect)
                password.style.color = "coral";
                checkpass.style.color = "coral";
                checkpass.value = '';
                password.value = '';
            }
    }
    else {
        //Password incorrect error
        password.style.color = "coral";
        checkpass.style.color = "coral";
        checkpass.value = '';

    }

    checkpass.addEventListener('click', e => {
        document.getElementById('checkpass').value = '';
    });

}

function initApp() {

    firebase.auth().onAuthStateChanged(function(user){

        //If logged in -> redirect
        if(user){

            var name = document.getElementById("name");
            var surn = document.getElementById("sur");
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            var checkpass = document.getElementById("checkpass");

            user.updateProfile({

                displayName: name.value

            }).then(function() {
                console.log(name.value);
                database.ref('users/' + name.value).set({
                    //data
                    surName:        surn.value,
                    desCription:    ""
                }).then(function(){
                    console.log("Success!");

                    //Give time to asynchronous calls to end for safety
                    setTimeout(function(){
                        window.location = 'index.html';
                    }, 3000);
                });
            }).catch(function(error) {
              console.error(error);
            });


        }
    });


}

window.onload = function() {
    initApp();
}

