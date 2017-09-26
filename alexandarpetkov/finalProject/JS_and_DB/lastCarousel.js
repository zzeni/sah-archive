
(function () {
    
    $.getJSON("JS_and_DB/saltWfishes.json", function(data) {
        var listSaltWfish = data;

        var imgLi = $('<li id="oldLi"></li>').appendTo('.imageRotate'); // append LI that we will see
        // var newLi = $('<li id="newLi"></li>').appendTo('.imageRotate').hide();
        
                // POP UP image - BIG

        $('#oldLi').click(function () {
            var thisURL = $(this).css('background-image');  // take the IMAGE-URL of clicked IMAGE
            $(this).toggleClass('large');
            $('.popUp').css("background-image", thisURL).show().addClass("large");
        });

        $('.popUp').click(function () {
           $(this).removeClass('large').hide();
        });


                            // CAROUSEL

        var click = Math.floor(listSaltWfish.length/2);  // add start point
        $('<p class="fishDesc"></p>').prependTo('.imageRotate');  // add description field
        $('.fishDesc').text(listSaltWfish[click].discription); // add text to first image (that we see on the start)

        $('.dots li:nth-of-type(' + (listSaltWfish.length/2 + 1) +')').addClass('redDot'); // set where to be the red dot (match to img that we see)

                // add first IMAGE
        $('.imageRotate > li').css({
            'background-image': 'url("' + listSaltWfish[click].image + '")',
        });
        
                // CLICK on Right ARROW 
        $('.rightArrow').click( function(){
            if(click < listSaltWfish.length -1) {                           
                click++;                                                // change the value of click +1
                $('.fishDesc').text(listSaltWfish[click].discription);      //  change the text in <p>
                $('.imageRotate > li').css({                            // change the image that we see 
                    'background-image': 'url("' + listSaltWfish[click].image + '")',
                });
                $('.dots > li').removeClass('redDot');                  // remove the red dot of previous LI 
                $('.dots > li:nth-of-type(' + (click+1) +')').addClass('redDot');  // put red dot on next LI
            }else {
                $('.fishDesc').text(listSaltWfish[click].discription);      
                $('.imageRotate > li').css({                            //  if is no more images stop on last one
                    'background-image': 'url("' + listSaltWfish[listSaltWfish.length -1].image + '")',
                }); 
            }
        });
                // CLICK on Left ARROW

        $('.leftArrow').click( function(){
            if(click > 0) {
                click--;
                $('.fishDesc').text(listSaltWfish[click].discription);
                $('.imageRotate > li').css({
                    'background-image': 'url("' + listSaltWfish[click].image + '")',
                });
                // console.log(click);
                $('.dots > li').removeClass('redDot');
                $('.dots > li:nth-of-type(' + (click+1) +')').addClass('redDot');
            } 
                // else 
                //     if (click < 1){
                //     $('#newLi').css({
                //         'background-image': 'url("' + listImage[3].image + '")',
                //         'display': 'inline-block'
                //     });
                //         // console.log($(this));
                //     $('#oldLi').hide();
                //     console.log('test');
                // }
             else {
                $('.fishDesc').text(listSaltWfish[click].discription);
                $('.imageRotate > li').css({
                    'background-image': 'url("' + listSaltWfish[0].image + '")',
                }); 
            }
        });
    });


    ///////////SECOND CAROUSEL

    $.getJSON('JS_and_DB/freshWfishes.json', function(data1){
        var freshWfishes = data1;
        var newCarousel = '<div class="mainCarousel">' +
                                        '<div class="carousel">' +
                                            '<ul class="arrows">' +
                                                '<li class="leftArrow1"></li>' +
                                                '<li class="mainConteiner1">' +
                                                    '<ul class="imageRotate1">' +

                                                    '</ul>' +
                                                    '<div class="popUp1"></div>' +
                                                '</li>' +
                                                '<li class="rightArrow1"></li>' +
                                            '</ul>' +
                                        '</div>' +
                                       '<ul class="dots1"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>' +
                                    '</div>';

        $('#tab_2').append(newCarousel);

        var imgLi1 = $('<li id="oldLi1"></li>').appendTo('.imageRotate1'); // append LI that we will see
        var newLi = $('<li id="newLi"></li>').appendTo('.imageRotate').hide();
        
                // POP UP image - BIG

        $('#oldLi1').click(function () {
            var thisURL = $(this).css('background-image');  // take the IMAGE-URL of clicked IMAGE
            $(this).toggleClass('large');
            $('.popUp1').css("background-image", thisURL).show().addClass("large");
        });

        $('.popUp1').click(function () {
           $(this).removeClass('large').hide();
        });


                            // CAROUSEL

        var click1 = Math.floor(freshWfishes.length/2);  // add start point
        $('<p class="fishDesc1"></p>').prependTo('.imageRotate1');  // add description field
        $('.fishDesc1').text(freshWfishes[click1].disc); // add text to first image (that we see on the start)

        $('.dots1 li:nth-of-type(' + Math.round(freshWfishes.length/2 + 1) +')').addClass('redDot'); // set where to be the red dot (match to img that we see)

                // add first IMAGE
        $('.imageRotate1 > li').css({
            'background-image': 'url("' + freshWfishes[click1].src + '")',
        });
        
                // CLICK on Right ARROW 
        $('.rightArrow1').click( function(){
            if(click1 < freshWfishes.length -1) {                           
                click1++;                                                // change the value of click1 +1
                $('.fishDesc1').text(freshWfishes[click1].disc);      //  change the text in <p>
                $('.imageRotate1 > li').css({                            // change the image that we see 
                    'background-image': 'url("' + freshWfishes[click1].src + '")',
                });
                $('.dots1 > li').removeClass('redDot');                  // remove the red dot of previous LI 
                $('.dots1 > li:nth-of-type(' + (click1+1) +')').addClass('redDot');  // put red dot on next LI
            }else {
                $('.fishDesc1').text(freshWfishes[click1].disc);      
                $('.imageRotate1 > li').css({                            //  if is no more images stop on last one
                    'background-image': 'url("' + freshWfishes[freshWfishes.length -1].src + '")',
                }); 
            }
        });
                // CLICK on Left ARROW

        $('.leftArrow1').click( function(){
            if(click1 > 0) {
                click1--;
                $('.fishDesc1').text(freshWfishes[click1].disc);
                $('.imageRotate1 > li').css({
                    'background-image': 'url("' + freshWfishes[click1].src + '")',
                });
                // console.log(click1);
                $('.dots1 > li').removeClass('redDot');
                $('.dots1 > li:nth-of-type(' + (click1+1) +')').addClass('redDot');
            } 
                // else 
                //     if (click1 < 1){
                //     $('#newLi').css({
                //         'background-image': 'url("' + listImage[3].image + '")',
                //         'display': 'inline-block'
                //     });
                //         // console.log($(this));
                //     $('#oldLi1').hide();
                //     console.log('test');
                // }
             else {
                $('.fishDesc1').text(freshWfishes[click1].disc);
                $('.imageRotate1 > li').css({
                    'background-image': 'url("' + freshWfishes[0].src + '")',
                }); 
            }
        });
    });

})();
