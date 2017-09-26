//First
var shoppingCart = [
  {
    name: "product 1",
    quantity: 2,
    price: 2.95
  },
  {
    name: "product 1",
    quantity: 3,
    price: 1.20
  },
  {
    name: "product 3",
    quantity: 1,
    price: 4.20
  }
]

function overallPrice(shoppingCart) {
  var result = 0;
  for (let i = 0; i<shoppingCart.length; i++ ) {
    result += (shoppingCart[i].quantity * shoppingCart[i].price);
  }
   return result;
}
document.write(overallPrice(shoppingCart));

//Second

var text = "The quick brown fox jumps over the lazy dog";
function wordCounter(txt) {
return text.split(" ").length;
}
document.write(wordCounter('txt'));

//Third

var text = "The quick brown fox jumps over the lazy dog";

function upperCaseLetter(text) {
   var splitStr = text.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}
document.write(upperCaseLetter("The quick brown fox jumps over the lazy dog"));


//Sixth

var string = 'Напишете функция, която да преброява гласните букви в даден текст';
function getVowels(string) {
  var vowelsCount = 0;
  for (var i = 0; i <= string.length; i++) {
    if (string.charAt(i) == 'а' || string.charAt(i) == 'ъ' || string.charAt(i) == 'о' || string.charAt(i) == 'е' || string.charAt(i) == 'у' || string.charAt(i) == 'и' ||  string.charAt(i) == 'ю' || string.charAt(i) == 'я') {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
document.write(getVowels(string));


//Seventh

var list = [3, 45, 2, 6, 18, 5];
var ascending = list.sort(function (a,b){
  return a > b;
})
document.write(ascending);
