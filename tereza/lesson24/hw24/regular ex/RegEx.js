/* globals window, document */

document.getElementById('btn-submit').addEventListener("click", function testUserName() {  
  var username = document.getElementById('username').value;
  if (username.match(/[a-zA-Z0-9._].{3,}\d$/)) { 
    document.getElementById('btn-submit').addEventListener("click", function testPassword() {  
      var password = document.getElementById('password').value;
      var regEx = new RegExp(/[\w!@#0^&*()+].{8,}/);
      if (regEx.test(password)) {
        document.getElementById("password").style.border = "3px solid green";
      } else {
        document.getElementById("password").style.border = "3px  solid red";
      }
      var passwordConfirm = document.getElementById("passwordConf").value;
      if (password != passwordConfirm) {
        document.getElementById("passwordConf").style.border = "3px solid red";
      } else {
        window.alert("Sing-up successful!");
      }
    });
  } else {
    window.alert('Invalid username input!');  
  }  
});





