function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate(){

    var config = {
      apiKey: "AIzaSyCrXSZWpBdn8HTiwEEySQ9Q4r4ZOE5jwIU",
      authDomain: "practicasipc-e2448.firebaseapp.com",
      databaseURL: "https://practicasipc-e2448.firebaseio.com",
      projectId: "practicasipc-e2448",
      storageBucket: "practicasipc-e2448.appspot.com",
      messagingSenderId: "110438816831"
    };
    firebase.initializeApp(config);

    const btnLogin = document.getElementById('submit');

    btnLogin.addEventListener('click', e =>{

        const email= document.getElementById('username').value;
        const pass= document.getElementById('password').value;
        const auth= firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e =>alert('Error message: '+ e.message));

    });

}

validate();
