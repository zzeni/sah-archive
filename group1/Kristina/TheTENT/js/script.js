window.onload = function () {

    // Check for LocalStorage support.
    if (localStorage) {

        // Retrieve the users name.
        var email = localStorage.getItem('email');

        if (email != "undefined" && !!email) {
            document.getElementById('email').innerHTML = email;
            document.getElementById('login').setAttribute('style', 'display: none');
            document.getElementById('logout').removeAttribute('style');
            
            document.getElementById('logout').addEventListener('click', function () {
                localStorage.removeItem('email');
            });
        } else {
            document.getElementById('email').innerHTML = "The TENT";
            document.getElementById('login').innerHTML = "Login";
        }
    }

}