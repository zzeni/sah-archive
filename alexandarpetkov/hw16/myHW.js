
                                    //TASK 2
                                    
// main

$('<h2>').appendTo('.panel-body');
$('div.panel-body > h2').text('TASK 1 - Shopping Cart').css('text-align','center');

$('<div>').appendTo('.panel-body').addClass('firstTask');

            //create elements

$('<div>').appendTo('.firstTask');
$('<p>').appendTo('.firstTask > div:first-of-type');
$('<span>').appendTo('.firstTask > div:first-of-type');

            // assigne CONTENT to elements
$('div:first-of-type p').append('Number of overall quantity is : ');  // insert CONTENT into 'P'
$('div:first-of-type span').append(' '+quantity(shoppingCart)); // insert CONTENT into 'SPAN'


// SECOND RESULT


            //create elements
$('<div>').appendTo('.firstTask');  // create NEW 'DIV'
$('<p>').appendTo('.firstTask > div:last-of-type'); // create NEW 'P'
$('<span>').appendTo('.firstTask > div:last-of-type'); // create NEW 'SPAN'

            // assigne CONTENT to elements
$('div:last-of-type > p').append('Number of vegans products is : ');
$('div:last-of-type >   span').append(' ' + veganQuantity(shoppingCart));





                                        //TASK 2

// main
$('<h2>').appendTo('.panel-body');
$('div.panel-body > h2:last-of-type').text('TASK 2 - Artists').css('text-align','center');

// FIRST RESULTS
$('<div>').appendTo('.panel-body').addClass('secondTask');

$('<div>').appendTo('.secondTask');
$('<p>').appendTo('.secondTask > div');
$('<span>').appendTo('.secondTask > div');

$('.secondTask div:first-of-type  p').append('Find Artist who is on 52 years : ');
$('.secondTask div:first-of-type span').append(' ' + findByAge(artists, 52));

// Second RESULTS

$('<div>').appendTo('.secondTask');
$('<p>').appendTo('.secondTask > div');
$('<span>').appendTo('.secondTask > div');

$('.secondTask div:last-of-type  p').append('How much are the average years of Artists : ');
$('.secondTask div:last-of-type span').append(' ' + avarageAge(artists) + ' years');




    // STYLE the TAGS
$('section').css('color', 'pink');
$('p').css({'color':'red', 'display':'inline-block', 'margin':'0'});
$('span').css({'font-weight':'bold', 'color':'blue', 'font-family':'sans-serif'});
$('.panel-body > div').css({'border':'1px solid black', 'marginTop':'10px'});
