function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(validateEmail(email.value)){
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email.value,password.value).then(function(){
            console.log("Login successful!");

        }).catch(function(error){
            //Handle errors

            var errorCode = error.code;
            var errorMessage = error.message;

            console.log('Error: ' + errorCode + ', ' + errorMessage);

            email.style.color = "coral";
            password.style.color = "coral";

        });
    }
    else{
        email.style.color = "coral";
        password.style.color = "coral";
        password.value = '';
    }

    password.addEventListener('click', e => {
        document.getElementById('password').value = '';
    });
}
