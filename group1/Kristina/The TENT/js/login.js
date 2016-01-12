window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('loginForm').addEventListener('submit', function() {
      // Get the value of the email field.
      var email = document.getElementById('inputEmail').value;

      // Save the email in localStorage.
      localStorage.setItem('email', email);

    });

  }

}