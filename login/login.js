'use strict';

(() => {
    document.querySelector('#login-form').addEventListener('submit', (e) => {
        e.preventDefault();

        let username = e.target[0].value; // First input (username input) in form
        let password = e.target[1].value; // Second input (password input) in form
        if(validateUsername(username) && validatePassword(password)) {
            Ajax.post(Urls.LOGIN, {username, password}).then((reponse) => {
                // Redirect user to main page
                location.href = Urls.LOGGED_USER_HOME;
                // You can use other means of redirecting and manipulate
                //    browser history if you want
            }).catch((error) => {
                // Login failed due to some error, e.g. invalid 
                //    password/username, server error
                // Notify user about failure
            });
        } else {
            // Not all inputs are filled properly
            // Display some visual message to the user
        }
    });

    function validateUsername(username) {
        // Implement initial form validation
        return true;
    }

    function validatePassword(password) {
        // Implement initial form validation
        return true;
    }
})();