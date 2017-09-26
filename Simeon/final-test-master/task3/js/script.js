/* global $, document */

//var children = new XMLHttpRequest();
//children.open('GET', 'C:\Users\Acer\Desktop\swift1\final-test-master\task3\js', true);
//children.onload = function(){
//    var myData = JSON.parse(children.responseText);
//    
//};
//children.send();
var kidHTML = "\n" +
	"<div class=\"kid\">\n" +
	"<div class=\"panel panel-info\">\n" +
	"  <div class=\"panel-heading\">\n" +
	"    <h3>%NAME%</h3>\n" +
	"  </div>\n" +
	"  <div class=\"panel-body\">\n" +
	"    <div class=\"col-sm-4\">\n" +
	"      <img class=\"img-responsive\" src=\"%IMG-FILE%\">\n" +
	"    </div>\n" +
	"    <div class=\"col-sm-8\">\n" +
	"      <ul>\n" +
	"        <li><h5>Години: 4</h5></li>\n" +
	"        <li><h5>Любим цвят: зелен</h5></li>\n" +
	"        <li><h5>Любима игра: LEGO</h5></li>\n" +
	"        <li><h5>Любима храна: сладолед</h5></li>\n" +
	"      </ul>\n" +
	"    </div>\n" +
	"  </div>\n" +
	"</div>\n" +
	"</div>\n";

$.getJSON('js/kids.json', function(data) {
	document.getElementById("kids").innerHTML = "";
	for(var i=0; i<data.length; i++) {
		var kid = data[i];
		document.getElementById("kids").innerHTML += kidHTML
			.replace("%NAME%", kid.name)
			.replace("%IMG-FILE%", kid.image)
		    .replace("Години", kid.age)
		    .replace("Любим цвят", kid.color)

	}
});