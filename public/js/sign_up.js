function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkpasswd(pass, checkpass){
    //TODO: Checks if password and confirm_password are equal
    return (pass === checkpass) ? true : false;
}

function sign(){

    //var name = document.getElementById("name");
    //var surn = document.getElementById("surn");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var checkpass = document.getElementById("checkpass");

    if(checkpasswd(password, checkpass)){
            if(validateEmail(email)){
                //Signup + error management
                //ALSO: auto-error handling includes email repetition in the database (i think)
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
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

firebase.auth().onAuthStateChanged(function(user){
    if(user){
        window.location = 'index.html';
    }
});

function initApp() {

    firebase.auth().onAuthStateChanged(function(user){

        //Manage visible spaces
        //document getElementById()
        if(user){

        }
        else{

        }
    });


}

window.onload = function() {
    initApp();
}

