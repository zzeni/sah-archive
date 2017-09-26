/*globals document*/
var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');

btn1.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});
btn1.addEventListener("dblclick", function (){
    document.body.style.backgroundColor = "white";
})
btn2.addEventListener("click", function(){
    var color = document.body.style.backgroundColor;
    if(color === "blue"){
        document.body.style.backgroundColor = "orange";

    }
    else {
        document.body.style.backgroundColor = "red";
    }


});




