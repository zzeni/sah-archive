(function() {
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

            // CHRISTMAS
    var timeYear = new Date();
    var christmasTime = timeYear.getMonth();
    // console.log(christmasTime);
    
    if (christmasTime === 11) {
        var mySnowFlake =  $('<i class="fa fa-snowflake-o fa-2x" aria-hidden="true"></i>').appendTo('body');
        $(document).ready($(mySnowFlake).addClass('mySnowFl'));
        
    } 
})();


