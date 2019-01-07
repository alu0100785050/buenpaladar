function changeToEdit(){
    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    edit_form.style.display = "block";
    prof_form.style.display = "none";

}

function changeToProf(){
    prof_form = document.getElementById("profile_form");
    edit_form = document.getElementById("edit_form");

    prof_form.style.display = "block";
    edit_form.style.display = "none";
}

function initApp(){

    changeToProf();

    document.getElementById("change_to_edit").addEventListener('click', e=> {
        changeToEdit();
    });

    document.getElementById("change_to_prof").addEventListener('click', e=> {
        changeToProf();
    });


}

window.onload = function() {
    initApp();
}
