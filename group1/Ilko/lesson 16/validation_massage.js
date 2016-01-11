function validateForm() {
    var x = document.forms["myForm"]["massage"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;