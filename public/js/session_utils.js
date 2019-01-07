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
