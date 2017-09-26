var btn1 = document.getElementById('one');
var btn2 = document.getElementById('two');

var body = document.getElementsByTagName('body')[0];

btn1.addEventListener('click', function () {
    body.style.background = 'blue';
})

btn2.addEventListener('click', function () {
   if (body.style.background === 'blue') {
       body.style.background = 'red';
   } else {
       body.style.background = 'orange';
   }
})
btn1.addEventListener('dblclick', function () {
    body.style.background = 'white';
})
