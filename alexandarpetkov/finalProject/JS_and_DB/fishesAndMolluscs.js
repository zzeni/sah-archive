(function(){
    'use strict';
    
    $.getJSON ('JS_and_DB/freshWfishes.json', function (dataFresh){
        var dataFr =  dataFresh;
        $.getJSON ('JS_and_DB/saltWfishes.json', function (dataSalt){
            var dataSa = dataSalt;
            $.getJSON ('JS_and_DB/mekoteli.json', function (dataMolls){
            var dataMol =  dataMolls;

                // Generate a BOX 
            var mySceleton = '<div>'+
                                '<p>Name</p>'+
                                '<img src="source" />'+
                                '<p class="descr">info</p>'+
                              '</div>';
                
                // Generate different BOX for every kind creatures 
            $('<h1 class="heading"></h1><div class="freshWF"></div>').appendTo('.images');
            $('<h1 class="heading"></h1><div class="saltWF"></div>').appendTo('.images');
            $('<h1 class="heading"></h1><div class="molluscs"></div>').appendTo('.images');
            
            $('.images > h1:last-of-type').text('Мекотели и други');
            $('.images > h1:first-of-type').text('Сладководни риби');
            $('.images > h1:nth-of-type(2)').text('Соленоводни риби');
                // Fill BOX with images - First JSON
            dataFr.forEach(function(oneFish){
                var oneImage = mySceleton.replace('Name', oneFish.disc).
                                          replace('source', oneFish.src).
                                          replace('info',oneFish.info);

                $('.freshWF').append(oneImage);
            });
                // Fill BOX with images - Second JSON
            dataSa.forEach(function(twoSFish){
                var oneSImage = mySceleton.replace('Name', twoSFish.discription).
                                           replace('source', twoSFish.image).
                                           replace('info', twoSFish.info);

                $('.saltWF').append(oneSImage);
            });
            // Fill BOX with images - third JSON
            dataMol.forEach(function(threeMoll){
                var oneMImage = mySceleton.replace('Name', threeMoll.desc).
                                           replace('source', threeMoll.image).
                                           replace('info', threeMoll.info);

                $('.molluscs').append(oneMImage);
            });
            // $('.descr').text('Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit');
            
                    // FULL image on click
            $('#full').css({
                width: '100%',
                height: '100%',
                background: 'rgba(51,51,51,0.8)',
                position: 'fixed',
                'padding': '2%',
                'text-align': 'center',
                top: '0',
                'z-index': '1000' 
            }).hide();
            $('<img class="myBigImg"/>').appendTo('#full').css({
                        psoition: 'relative',
                        'max-width': '100%',
                        'max-height': '100%',
            });
            
            var showMe = true;

            $('img').on('click', function() {
                if(showMe) {
                    $('#full').show();
                    $('.myBigImg').attr('src', this.src);
                    // showMe = false;
                } else {
                    $('#full').hide();
                    // showMe = true;
                }
            });

            $('#full').on('click', function() {
                $(this).hide();
            });

            });  
        });  
    });  

    // Back to FIRST page

    $('#backTofirstP').on('click', function(){
        window.location.href = "../index.html";
    });
    
           // GO to TOP smooth

    $('#GoTop').click(function(){
        $('body').animate({scrollTop : 0},800);
    });

        // SMOOTH move to the SECTIONS
    function goTothere (numberLi, targetSec) {
        $('#mainNavigation ' + numberLi + ' a').click(
            function (event) {
                event.preventDefault();
                $('body').animate({scrollTop : $(targetSec).offset().top},600);
            }
        );
    }
    goTothere ('li:first-of-type', '.images h1:first-of-type');
    goTothere ('li:nth-of-type(2)', '.images h1:nth-of-type(2)');
    goTothere ('li:nth-of-type(3)', '.images h1:last-of-type');
})();



