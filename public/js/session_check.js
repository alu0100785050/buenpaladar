firebase.auth().onAuthStateChanged(function(user){
    if(user){
        user.getIdToken().then(user => {
            const csrfToken = getCookie('csrfToken');
            return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
        }).then(() => {
            return firebase.auth().signOut();
        }).then(() => {
            window.location.assign('index.html')
        });
    }
    else{
        console.log("none");
    }
});
