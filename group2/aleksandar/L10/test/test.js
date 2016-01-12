//var text = "What am i? I'm a string";
//
//function Return(text) {
//	var result = "";
//	for (var i = 1; i < text.length - 1; i += 1) {
//		result += text[i];
//	}
//	return result;
//}
//
//var myString = text[text.length - 1] + Return(text) + text[0];
//
//console.log(myString);

var text="Text";

function toArray(text) {
var index = 0;
var array = [];

while (index < text.length) {
	array[index] = text.charAt(index);
	index += 1;
}
	return array;
}
//console.log(array);

