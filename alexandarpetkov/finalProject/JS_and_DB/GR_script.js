(function(){
    'use strict';
    $.getJSON('JS_and_DB/grAdventure1.json', function (data){
        var advImgGr = data;
        var advImgGr1; // for using AJAX asichrone - start

        // Take window. width and height to new div, to open biger image
        var winHeight = $(window).outerHeight();
        var winWidth = $(window).outerWidth();
        $('#full').css({
                            width: winWidth,
                            height: winHeight,
                            position: 'fixed'
                        });
        var mytext = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum laborum earum exercitationem molestiae fuga ex accusantium sunt quam sint, cumque optio non nam quisquam, necessitatibus labore dignissimos illo sequi. Deleniti.', 'zlatidadsdasad', 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iusto hic nostrum obcaecati dolore voluptas reprehenderit recusandae minima ducimus dolor repellat repudiandae, natus omnis, quas, eaque porro perferendis modi dignissimos.', 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus magni totam quis deleniti, commodi sapiente, facilis nihil quod consequatur dolorem, ad quia, voluptates quidem explicabo vel ea! Similique, deserunt, quam?', 
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in, deserunt nobis, aut vitae aperiam explicabo autem nostrum, corporis illo suscipit rem culpa iste doloribus dolorem porro dolorum, animi ratione!'];

        // $.getJSON('JS_and_DB/bgAdventure2.json', function (data1){
            // var advImgGr1 = data1;

        
           

        var gallery = '<div>'+
                            '<ul>'+
                               '<li>' +
                                    '<p class="desc">description</p>' +
                                    '<img src="put_url" alt=""/>' +
                                '</li>'+
                            '</ul>'+
                        '</div>';

            // DINAMYC insert the images in main gallery
        advImgGr.forEach(function (fromAdvImgGr) {
            var fullGalery = gallery.replace('put_url', fromAdvImgGr.url)
                                    .replace('description', fromAdvImgGr.discription);
            $('.images').append(fullGalery);
        });


            // ADD different class to all ANCHORS - numbering
        $('#mainNavigation li a').each(function(z){
            $(this).addClass("number_" + z);
        });
            
            // APPEND new DIV-s in section
        for (i = 0; i <= ($('#mainNavigation li').length - 2); i++) {
            var newDiv = $('section').append('<div></div>');
            $('section > div').css('display', 'none');
        }
        $('.images').css('display', 'flex');

            // When click to HIDE or SHOW div which match number to A 
        function showNumGallery (anchor){
         
            $('section > div').hide('slow');
            // $('h2').hide('slow');
            $('section > div:nth-of-type(' + anchor.data.param + ')').show('slow');                
        } 

        for (var i = 0; i<=$('#mainNavigation li').length; i++){
            $('#mainNavigation li:nth-of-type('+ i + ') a').click({param: i},showNumGallery);
        }
            
        $.ajax({
            method: 'GET',
            url: 'JS_and_DB/grAdventure2.json'
        }).done(function(data1){
            advImgGr1 = data1;
    
                // FOR creating the Images in before creater DIV-s
            for (var j=1; j<(advImgGr1.length); j++) {
                var fullGalery1 = gallery.replace('description', advImgGr1[j].discription).
                                      replace('put_url', advImgGr1[j].url);
                $('section>div:nth-of-type(2)').append(fullGalery1);
                // console.log(advImgGr1[1].description);
                // console.log(i);
            }

                // HEADINGS to Gallery
            function myText(text, numDiv){
                $('<h2>' + text +'</h2>').prependTo(numDiv);
            }

            myText ('П-ов Ситония - къмпинг Каламици и къмпинг Талата, Септември 2015г.', 'section>div:first-of-type');
            myText ('Остров Лефкада - Никиана, Септември 2014г.', 'section>div:nth-of-type(2)');
            myText ('Остров Закинтос - Ано Василикос, Юни 2015г. ', 'section>div:nth-of-type(3)');
            myText ('П-ов Ситония - Сарти, Май 2016г.', 'section>div:nth-of-type(4)');
            myText ('Остров Тасос - Ормус Принос, Септември 2016г.', 'section>div:nth-of-type(5)');
            



            $.getJSON('JS_and_DB/grAdventure3.json',function (data2){
                var advImgGr2 = data2;
                advImgGr2.forEach(function (fromAdvImgBg2) {
                    var fullGalery2 = gallery.replace('put_url', fromAdvImgBg2.url)
                                            .replace('description', fromAdvImgBg2.discription);
                    $('section>div:nth-of-type(3)').append(fullGalery2);
                });
                
                $.getJSON('JS_and_DB/grAdventure4.json',function (data3){
                    var advImgGr3 = data3;
                    advImgGr3.forEach(function (fromAdvImgBg3) {
                    var fullGalery3 = gallery.replace('put_url', fromAdvImgBg3.url)
                                            .replace('description', fromAdvImgBg3.discription);
                    $('section>div:nth-of-type(4)').append(fullGalery3);
                     });
                    
                    $.getJSON('JS_and_DB/grAdventure5.json',function (data4){
                        var advImgGr4 = data4;
                        advImgGr4.forEach(function (fromAdvImgBg4) {
                        var fullGalery4 = gallery.replace('put_url', fromAdvImgBg4.url)
                                            .replace('description', fromAdvImgBg4.discription);
                        $('section>div:nth-of-type(5)').append(fullGalery4);
                        });    

// UNIQUE UGLY but work - starts
                            // Some text to adventure
                        function myStory(text, numDiv){
                            $('<p>'+text+'</p>').appendTo(numDiv);
                        }
                        function myFunc(texts) {
                            for (var k=0; k<=$('section>div').length;k++){
                                myStory (texts[k-1], 'section>div:nth-of-type('+ k +')');
                        // console.log(myStory());
                            }
                        }
                        myFunc(mytext);
            
// UNIQUE UGLY but work - end

                            // ON CLICK to backame big image - START

                            // ADD source of img to new DIV and class to be bigger
                        $('section>div img').on('click', function(){
                            $('#full').addClass('popDiv');
                            var imgUrl = 'url(' + this.src +  ')';
                            $('#full').css({
                                'background-image': imgUrl,
                                'background-size': 'contain',
                                'background-position': 'center',
                                'background-repeat': 'no-repeat'
                            });
                        });
                            
                            // REMOVE class - close the window
                        $('#full').on('click', function(){
                            $(this).removeClass('popDiv');
                        });

                            // ON CLICK to backame big image - END  
                        changeCSS ();
                    
                    }); //JSON-4
                
                }); //JSON-3
            
            }); //JSON-2
        
        }) ;  //for using AJAX asichrone - end 
    
    });//JSON-1
                // STYLING the ELEMENTS

            function changeCSS () {
                $('section').css({
                    'font-size': '24px',
                    'text-align': 'center',
                    'font-weight': 'bold'
                });
                $('.desc').css({
                    'font-size': '16px',
                    'font-weight': 'bold'
                });

                $('h2').css({
                    'margin-top': '15px',
                    'margin-bottom': '20px',
                    'width': '100%',
                });
                $('section>div>p').css({
                    'font-size': '16px',
                    'width': '100%',
                    'margin-bottom':'10px'
                });
            }
    // });//JSON-1
    $('#backTofirstP').on('click', function(){
        window.location.href = "../index.html";
    });

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
        // GO to TOP smooth

        $('#GoTop').click(function(){
            $('body').animate({scrollTop : 0},800);
        });

})();



