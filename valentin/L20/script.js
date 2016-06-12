var firstarray = [];
var joinArray = [];
var sortArray = [];

function showStash(array) {
  $('#stash').text(array);
};


$('#submit').click(function () {
  firstarray.push(Number($('#number').val()));
  joinArray = firstarray.join(' ');
  $('#number').val("");
  showStash(joinArray);
});


$('#sort').click(function () {
  sortArray = firstarray.sort(function(a,b) { 
  	return a > b
  });

  sortArray = sortArray.join(' ');
  showStash(sortArray);
});


$('#eraze').click(function () {
  firstarray = [];
  joinArray = [];
  showStash(joinArray);
});






























