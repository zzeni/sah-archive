
(function () {
    'use strict';
    $.getJSON("JS_and_DB/saltWfishes.json", function(data) {
        var listSaltWfish = data;

            /////////////////// FIRST - CAROUSEL start

        // var myPicAll = '<li>' +
        //                     '<p>descriptions</p>' +
        //                     '<img src="linkToImage"/>' +
        //                 '</li>';



        // for (var i=0; i<listSaltWfish.length; i++) {
        //     var myContainer = myPicAll.replace('descriptions', listSaltWfish[i].discription).
        //                                 replace('linkToImage', listSaltWfish[i].image);
        //     $('.imageRotate').append(myContainer);
        //     // console.log(myContainer);
        // }
        
                    // POPup the image IN FORNT the container
        // var popUpElement = $(".mainConteiner .popUp");
        // function myCarousel (myPopUp, myContImg, myLeftA, myRightA, liRotate) {
        //     var popUpElement = $(myPopUp);  //".popUp"

        //     $(myContImg).addClass('myImage'); // '.mainConteiner img'
        //     $('.myImage').click(function () {
        //         var imageUrl = 'url(' + this.src + ')';
        //         $(this).toggleClass('large');
        //         popUpElement.css("background-image", imageUrl).show().addClass("large");
        //     });

        //     popUpElement.click(function () {
        //        $(this).removeClass('large').hide();
        //     });
        //                         // SLIDER left and right

        //     var slide = 0;
        //     // $('.imageRotate').addClass('positionRel');
        //     var leftAr = $(myLeftA);   // '.leftArrow'
        //     var rightAr = $(myRightA);  // '.rightArrow'
        //     var myLiRotate = $(liRotate);     // '.imageRotate li'

        //     rightAr.click( function () {
        //         // var lastLi = $('.imageRotate li:last-of-type');
        //         slide -= 260;
        //         // $('.myImage').css('transform', 'translateX(' + slide + 'px)');
        //         myLiRotate.css('transform', 'translateX(' + slide + 'px)');
        //         myLiRotate.addClass('smoothRot');
        //         // $( ".imageRotate" ).animate({ "left": "+=260px" }, "slow" );
        //     });
        //     var clickL = 0;    
        //     leftAr.click( function () {
        //         clickL++;
        //         // var firstLi = $('.imageRotate li:first-of-type');
        //         slide += 260;
        //         // $('.myImage').css('transform', 'translateX(' + slide + 'px)');
        //         myLiRotate.css('transform', 'translateX(' + slide + 'px)');
        //         myLiRotate.addClass('smoothRot');
        //         // $( ".imageRotate" ).animate({ "left": "-=260px" }, "slow" );

        //     });

        //     var click = Math.floor(listSaltWfish.length/2);
            
        //     $('.rightArrow').click( function(){
        //         if(click < listSaltWfish.length -3) {
        //             click++;
        //             $('.imageRotate > li').css({
        //                 'background-image': 'url("' + listSaltWfish[click].image + '")',
        //             });
        //             console.log(click);
        //         }else {
        //            $('.imageRotate > li').css({
        //                 'background-image': 'url("' + listSaltWfish[listSaltWfish.length -1].image + '")',
        //             }); 
        //         }
        //     });
            
        //     $('.leftArrow').click( function(){
        //         // var infinite = 
        //         if(click > 0) {
        //             click--;
        //             $('.imageRotate > li').css({
        //                 'background-image': 'url("' + listSaltWfish[click].image + '")',
        //             });
        //             console.log(click);
        //         } else {
        //             $('.imageRotate > li').css({
        //                 'background-image': 'url("' + listSaltWfish[0].image + '")',
        //             }); 
        //         }
        //     });
        // }

        // myCarousel (".popUp", '.mainConteiner img', '.leftArrow', 
        //     '.rightArrow', '.imageRotate li');

                ////////////////////// FIRST - CAROUSEL end

            // BUTTON click go to location
        $('.fistSection button').click(
            function goTools () {
                window.location.href = "fishesAndMolluscs.html";
            }
        );

            // title CLICK
        $('.secondSection h3').click(
            function goTools () {
                window.location.href = "BG_advanture.html";
            }
        );

        $('.thirdSection h3').click(
            function goTools () {
                window.location.href = "GR_advanture.html";
            }
        );
                // ADD icons to title
        function putFlag (src, appendTO){
            var iconBG = $('<img src="images/' + src + '">');
            $("." + appendTO + " h3").append(iconBG);
            iconBG.css({'width':'30px', 'marginLeft':'10px', 'borderWidth':'1px', 'borderStyle':'solid'});
        }
        putFlag('bulgaria_flag.png', 'secondSection');
        putFlag('greece_flag.png', 'thirdSection');


            // GO to TOP smooth

        $('#GoTop').click(function(){
            $('body').animate({scrollTop : 0},800);
        });


            // SMOOTH move to the SECTIONS
        function goTothere (numberLi, targetSec) {
            $('#mainNavigation ' + numberLi + ' a').click(
                function (event) {
                    event.preventDefault();
                    $('body').animate({scrollTop : $("." + targetSec ).offset().top},600);
                }
            );
        }
        goTothere ('li:first-of-type', 'fistSection');
        goTothere ('li:nth-of-type(2)', 'secondSection');
        goTothere ('li:nth-of-type(3)', 'thirdSection');
        goTothere ('li:nth-of-type(4)', 'fifthSection');
        goTothere ('li:last-of-type', 'contacts');


            // REMOVE the TOP button

        $(window).scroll( function () {
            if ($(this).scrollTop() < 680) {
                $('#GoTop').fadeOut(800);
                $(mySnowFlake).css('color', 'white');
            } else {
                $('#GoTop').fadeIn(800);
                $(mySnowFlake).css('color', '#DAA520');
            }
        });

                    // FIRST SECTION aside buttons

        $('.btnOne a:first-of-type').on('click', function(event){
            event.preventDefault();

            $('.mainCarousel').slideDown(1000);
            $('.fistSection > article > button').show().fadeIn(2000);

            $('#tab_2').hide();
            $('#tab_3').hide();

        });
        $('.btnOne a:nth-of-type(2)').on('click', function(event){
            event.preventDefault();
            $('#tab_2').addClass('positionRel').css({'opacity':'0', 'right':'1250px'});
            $('#tab_2').show().animate({
                opacity: 1,
                right: "0",
                }, 1500);

            $('.fistSection > article > button').hide();
            $('article > .mainCarousel').hide();
            $('#tab_3').hide();
        });
        $('.btnOne a:nth-of-type(3)').on('click', function(event){
            event.preventDefault();

            $('#tab_3').slideDown(2000);
            $('#tab_3').css('display', 'flex');

            $('.fistSection > article > button').hide();
            $('article > .mainCarousel').hide();
            $('#tab_2').hide();
        });



                    // SECOND CAROUSEL


        $.getJSON('JS_and_DB/freshWfishes.json', function(data1){
            var freshWfishes = data1;

            /////////////////// SECOND - CAROUSEL start
            // var newCarousel = '<div class="mainCarousel">' +
            //                         '<div class="carousel">' +
            //                             '<ul class="arrows">' +
            //                                 '<li class="leftArrow1"></li>' +
            //                                 '<li class="mainConteiner1">' +
            //                                     '<ul class="imageRotate1">' +

            //                                     '</ul>' +
            //                                     '<div class="popUp1"></div>' +
            //                                 '</li>' +
            //                                 '<li class="rightArrow1"></li>' +
            //                             '</ul>' +
            //                         '</div>' +
            //                     '</div>';

            // $('#tab_2').append(newCarousel);

        //     for (var i = 0; i < freshWfishes.length; i++) {
        //         var freshWImages = myPicAll.replace('descriptions', freshWfishes[i].disc).
        //                                          replace('linkToImage', freshWfishes[i].src);

        //         $('#tab_2 .imageRotate1').append(freshWImages);
        //         // console.log('imageRotate1');
        //     }
        //     myCarousel (".popUp1", '.mainConteiner1 img', '.leftArrow1',
        //      '.rightArrow1', '.imageRotate1 li');
            
        // });

                    // THIRD DROP DOWN
        var molluscsImg = '<div>' +
                            '<p>name</p>' +
                            '<img src="url_here" />' +
                          '</div>';

        $.getJSON('JS_and_DB/mekoteli.json', function(imgMolluscs){
            var myMolluscs = imgMolluscs;

            for (var g = 0; g<myMolluscs.length; g++){

                var molluscsPic = molluscsImg.replace('url_here', myMolluscs[g].image)
                                            .replace('name', myMolluscs[g].desc);

                $('#tab_3').append(molluscsPic);
            }

                    // IMG to BIG

            $('<span id="bigTab"></span>').appendTo('#tab_3').css({
                                                            width: '420px',
                                                            height: '350px',
                                                            position: 'absolute',
                                                            display: 'none'});
            
            $('#tab_3 img').click(function(){
                var myURL = this.src;
                var clickShow = true;
                if ($('#bigTab').css('display') === 'none'){
                    $('#bigTab').show('slow').css({
                        'backgroundImage': 'url(' + myURL + ')',
                        'backgroundPosition': 'center',
                        'backgroundSize': 'cover'
                    });
                    clickShow = false;
                } else {
                    $('#bigTab').hide('slow');
                    clickShow = true;
                }
            });
            $('#bigTab').click(function() {
                $(this).hide('slow');
            });
        });
        });
            /////////////////// SECOND - CAROUSEL start



                    // BUTTON DROPDOWN small screen

        if ($(window).width() <= 414) {
            // var newCross = $('<div></div>').appendTo('#topHeader aside');
            var newCross1 = $('<img></img>').appendTo('#topHeader aside');
            var newCross2 = $('<img></img>').appendTo('#topHeader aside');
            var touchTarget = $('<div></div>').appendTo('#topHeader');
            touchTarget.css({
                'width': '35px',
                'height': '35px',
                'position': 'absolute',
                'top': '17px',
                'left': '12px'
            });

            function startPostion () {
                newCross1.attr('src', ' images/bars_and_arrows/myBarOne.png').css({
                    'width': '35px', 'height': '35px', 'position': 'absolute',
                    'top': '17px', 'left': '12px', 'transform': 'translate(-20px, 20px)',
                    'opacity': '0'
                });
                newCross2.attr('src', ' images/bars_and_arrows/myBarTwo.png').css({
                    'width': '35px', 'height': '35px', 'position': 'absolute',
                    'top': '17px', 'left': '12px', 'transform': 'translate(20px, 20px)',
                    'opacity': '0'
                });
            }
            startPostion();


            var hideAndShow = false;
            $(touchTarget).on('click', function (event) {
                event.preventDefault();

                if (hideAndShow === false) {

                    $(newCross1).animate({
                        opacity: 1,
                        left: '35',
                        top: '-3'
                    }, 600);
                    $(newCross2).animate({
                        opacity: 1,
                        left: '-6',
                            top: '-3'
                    }, 600);
                    $('#topHeader img').show();
                    $('#dropdownBars').hide();
                    $('#mainNavigation').show();
                    // console.log('sasho 1');

                    hideAndShow = true;

                } else {
                    startPostion();

                    $('#topHeader img').hide();
                    $('#mainNavigation').hide();
                    $('#dropdownBars').show();

                    // console.log('sasho 2');
                    hideAndShow = false;
                }
            });
        }
    });

                // Background image fifthsection
    function placeImg (sect, url) {
        $('.fifthSection article:' + sect + ' main').css({
            'backgroundImage' : 'url(' + url + ')',
            'backgroundSize' : 'cover',
            'backgroundPosition' : 'center'
        });
    }
    placeImg('first-of-type', '../images/sea_view.jpg');
    placeImg('nth-of-type(2)', '../images/river_view.jpg');
    placeImg('last-of-type', '../images/tools/bag_berkley.jpg');

            // SIGN IN, SIGN OUT, SIGN UP

    
    // $('.sign2').css('margin-left', '20px');

    var getIn =     '<article id="signIN">' +
                        '<header>' +
                            '<h2>Влез в профила си <span>сега!</span></h2>' +
                        '</header>' +
                        '<form action="#" method="#">' +
                            '<input type="text" name="name" placeholder="Name">' +
                            '<input type="password" name="pass" placeholder="Password">' +
                            '<input type="submit" name="btn" value="Get Started">' +
                        '</form>' +
                    '</article >';


    $(getIn).appendTo('main > section').hide();

    $('.sign2').on('click', signUP);
    function signUP(){
        if ($('#signIN').css('display')) {
            $("#signIN").hide();
            $('#registration').show('slow');
        } else {
            $('#registration').show('slow');
        }
        $('main section article p').removeClass('warning');   
    }

    $('.sign1').on('click', signIN);
    function signIN(){
        if ($('#registration').css('display')) {
            $("#registration").hide();
            $('#signIN').show('slow');
        } else {
            $('#signIN').show('slow');
        }
        $('main section article p').removeClass('warning');   
    }
            // SEARCH for EXISTING user


    $.getJSON('JS_and_DB/sign-in-people.json', function(dataUser){
        var searchUser = dataUser;
        var userNInput = $('main section article:last-of-type input:first-of-type');
        var passWInput  = $('main section article:last-of-type input:nth-of-type(2)');   
        var nameCookie = '';
        var butOut = $('<button class="sign3">SING OUT</button>').css({
                                                                'margin-left': '20px',
                                                                'display': 'none',
                                                                });
        butOut.appendTo('main section article:first-of-type p');
        
        $('main section article:last-of-type header').append('<p></p>');
        $('main #registration header').append('<p></p>');

        $('main article:last-of-type input[type="submit"]').on('click', singInOut);

        function signTrue (){
            butOut.css( 'display', 'block');
            // console.log('this is true FULL user');
            $('main section article:last-of-type p:last-of-type').hide();
            $('main section #registration').hide();
            $('main section article:last-of-type').hide();
            $('.sign1').hide();
            $('.sign2').hide();
            $('main section article:last-of-type header p').text('');
            $('<h2>Здравейте '+ cookieName() +' !</h2>').appendTo('main section article:first-of-type');
        }

        function signFalse() {
            // $('main section article:last-of-type header p').text('Please try again. No such USER or PASSWORD');
            $('main section article:last-of-type p:last-of-type').addClass('warning');
        }

        $('main article .sign3').on('click', function (){
            var cookie = document.cookie;
            var arr = cookie.split('=');
            var delDate = 'Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = 'name='+ arr[1] +';expires=' + delDate + ';path=/';
            // console.log('ddddd');
            $('.sign3').hide();
            $('main section article:first-of-type h2').hide();      
            $('main section article:last-of-type').show();
            $('.sign1').show();
            $('.sign2').show();
            $('main section article:last-of-type header p').show();
        });

               // COOKIES - start

        // create new cookie
        function createCookie(){
            var thisDate = new Date();
            thisDate.setTime(thisDate.getTime() + 1000*60*60*24*365);
            var oneYear = thisDate.toUTCString();
            if ($('#registration').css('display') !== 'none') {
                nameCookie = $('#registration input:first-of-type').val();
                // console.log('тук! SIGN-UP!');
                
            } else {
                nameCookie = $('#signIN input:first-of-type').val();
                // console.log('тук SIGN-IN!');
            }
            document.cookie = 'name='+ nameCookie +';expires=' + oneYear + ';path=/';
        }
        // check for recent cookie
        function checkCookie() {
            if (document.cookie != "") {
                signTrue ();
            } else if ($('#signIN input:first-of-type').val() != ""){
               createCookie();
            }
        }

        function cookieName (){
            var arr = document.cookie.split('=');
            return arr[1];
        }
        
        // when DOM is ready  check for cookie
        $(document).ready(checkCookie());
        
                        // COOKIES - end

        function singInOut(event){
            event.preventDefault();
            magic ();
            $('main section article:last-of-type header p').text('Please try again. No such USER or PASSWORD');
        }
            
        function magic (){
            searchUser.forEach( function(element){
                $('.sign3').on('mouseover').css('cursor', 'pointer');

                if(element.username === userNInput.val() && element.password === passWInput.val()){
                    createCookie();
                    signTrue ();
                } else {
                    signFalse();
                }
            });
        }
        
            // IF WE SING-UP - create cookie

        $('input[type="submit"]').on('click', makeReg);
        
        function makeReg (event){
            event.preventDefault();
            if($('#registration input[type="text"]').val() !== '' &&
                $('#registration input[type="email"]').val().match(/[\@]/) &&
                $('#registration input[type="password"]').val() !== ''){
                
                if($('#registration input[type="password"]').val().length > 5) {
                    createCookie();
                    signTrue ();
                } else {
                    $('#registration p').text('The password is too short (min. 6 symbols)').addClass('warning');
                }
           
            } else if ($('#registration').css('display') !== 'none') {
                $('#registration p').text('please fill ALL fields or you are not use @').addClass('warning');
            }
        }
    });
    
         
          
        // OOP comments

    
    $.getJSON('JS_and_DB/Comments.json', function(commentData){
        var myPeopleComm = commentData;

        var comentGenerator = '<article>' +
                                    '<p>coment</p>' +
                                    '<div class="user">' +
                                        '<img src="picSRC" alt=""/>' +
                                        '<h3>name</h3>' +
                                        '<p>job</p>' +
                                    '</div>' +
                                '</article>';

        for (var i = 0; i<myPeopleComm.length; i++) {
            var manyComm = comentGenerator;
            var myComs = $('#Six > .main').append(manyComm);
        }

        $('#Six > .main').css({
            "flex-wrap": 'wrap',
            "min-width": '27%',
        });
        $('#Six').css('height', 'auto');

        function Comments(comment, user, img, work){
            this.comment = comment;
            this.user = user;
            this.img = img;
            this.work = work;
        }
        for (var j = 0; j<myPeopleComm.length; j++){
            var myPerson = myPeopleComm[j];
            var persons = new Comments(myPerson.comment, myPerson.user, myPerson.img, myPerson.work);
            $('#Six > .main article:nth-of-type('+ (j+1) +') > p').text(persons.comment);
            $('#Six > .main article:nth-of-type('+ (j+1) + ') .user > h3').text(persons.user);
            $('#Six > .main article:nth-of-type('+ (j+1) + ') .user > img').attr('src',persons.img);
            $('#Six > .main article:nth-of-type('+ (j+1) + ') .user > p').text(persons.work);
            // console.log(persons instanceof (Comments));
        }
    });
            // CHRISTMAS
    var timeYear = new Date();
    var christmasTime = timeYear.getMonth();
    // console.log(christmasTime);
    
    if (christmasTime === 11) {
        var mySnowFlake =  $('<i class="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>').appendTo('body');
        $(document).ready($(mySnowFlake).addClass('mySnowFl'));
        
    } 
    
        // GO to fishing tools
    $('.fifthSection section:first-of-type').mouseover(function(){
        $(this).css('cursor', 'pointer');
    }); 
    $('.fifthSection section:first-of-type').on('click', function(){
        window.location.href = 'fishingTools.html';
    });

})();


