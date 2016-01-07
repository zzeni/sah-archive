'use_strict';

$(document).on("ready", function () {
    $(window).on('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if (distanceY > 150) {
            if (!$('header').hasClass('collapse')) {
                $('header').addClass('collapse');
            }
        } else {
            if ($('header').hasClass('collapse')) {
                $('header').removeClass('collapse');
            }
        }
    });

    $('#sidebar').stickyfloat({
        startOffset: 315,
        duration: 400
    });

    $(".fancybox-thumb").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',

        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            }
        }
    });

    $(".fancybox").fancybox({
        width: '70%',
        height: '70%',
        nextClick: true,
        arrows: true,
        closeBtn: true
    });

    $(".vote").click(function () {

        $("#votePanel").hide("blind", 400);
        $("#panelTitle").hide();
        $("#panelTitleonVote").fadeIn("slow");

    });

    $(".home").click(function () {

        $("#windowsCenter, #iosCenter, #androidCenter").hide();

        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
        $("#center").fadeIn("slow");

    });

    $("#aboutNav").click(function () {

        $("#windowsCenter, #iosCenter, #androidCenter").hide();

        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });

        $("#center").show();
        $('html, body').animate({
            scrollTop: $("#aboutUs").offset().top - 70
        }, 800);
    });

    $("#contactNav").click(function () {

        $("#windowsCenter, #iosCenter, #androidCenter").hide();

        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });

        $("#center").show();
        $('html, body').animate({
            scrollTop: $("#contactMe").offset().top - 100
        }, 800);
    });

    $("#ratesNav").click(function () {

        $("#windowsCenter, #iosCenter, #androidCenter").hide();

        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });

        $("#center").show();

        $('html, body').animate({
            scrollTop: $("#stats").offset().top - 70
        }, 800);
    });

    $("#android").click(function () {

        $("#windowsCenter, #iosCenter, #center").hide();

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        $('#androidCenter').fadeIn("slow");
    });

    $("#huaweiDetailsLink").click(function () {

        $('#huaweiDetails').fadeToggle("slow");
    });

    $("#galaxys6DetailsLink").click(function () {

        $('#galaxys6Details').fadeToggle("slow");
    });

    $("#lgDetailsLink").click(function () {

        $('#lgDetails').fadeToggle("slow");
    });

    $("#sonyDetailsLink").click(function () {

        $('#sonyDetails').fadeToggle("slow");
    });

    $("#xiaomiDetailsLink").click(function () {

        $('#xiaomiDetails').fadeToggle("slow");
    });

    $("#lumia950DetailsLink").click(function () {

        $('#lumia950Details').fadeToggle("slow");
    });

    $("#lumia550DetailsLink").click(function () {

        $('#lumia550Details').fadeToggle("slow");
    });

    $("#lumia640DetailsLink").click(function () {

        $('#lumia640Details').fadeToggle("slow");
    });

    $("#iphone6sDetailsLink").click(function () {

        $('#iphone6sDetails').fadeToggle("slow");
    });

    $("#iphone6DetailsLink").click(function () {

        $('#iphone6Details').fadeToggle("slow");
    });

    $("#iphone5DetailsLink").click(function () {

        $('#iphone5Details').fadeToggle("slow");
    });

    $("#windows").click(function () {
        $("#androidCenter, #iosCenter, #center").hide();

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        $("#windowsCenter").fadeIn("slow");
    });

    $("#ios").click(function () {
        $("#androidCenter, #windowsCenter, #center").hide();

        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        $("#iosCenter").fadeIn("slow");
    });

    $(function () {
        $(".accord").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    });

    $(window).on('resize', function () {
        $('#item-preview').each(function () {
            var width = $(this).width();
            $(this).find('iframe').height(width * 0.7);
        });
        var min_height = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();

        if (min_height > 0) {
            $('main').css('min-height', '' + min_height + 'px');
        }
    });

    $(window).resize(); // trigger the resize event in order to set footer position

    $("#loginButton").click(function loginValidator() {

        var name = $('#uid').val();
        var pass = $("input[type=password]").val();

        if (name == "Andro" && pass == "1234") {
            $("#loginTitle").html("Hello!");
            $("#loginButton,#uid, input[type=password]").hide();
            $("#loginAlert").html("Welcome, Andrey!");
            $("#loginAlert").fadeIn("slow");
            $("#logoutButton").fadeIn("slow");
            return false;
        } else {
            $("#loginAlert").html("Incorrect username or password. Please try again.");
            $("#loginAlert").fadeIn("slow");
        }
        return false;

    });

    $("#logoutButton").click(function () {
        $("#loginAlert").hide();
        $("#logoutButton").hide();
        $("#loginTitle").html("Log In");
        $('#uid').val('');
        $("input[type=password]").val('');
        $("#loginButton,.form-control").fadeIn();

    });

    function notEmpty(elem, helperMsg) {
        if (elem.value.length == 0) {
            alert(helperMsg);
            elem.focus(); // set the focus to this input
            return false;
        }
        return true;
    }

    function isAlphabet(elem, helperMsg) {
        var alphaExp = /^[a-zA-Z]+$/;
        if (elem.value.match(alphaExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    function emailValidator(elem, helperMsg) {
        var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        if (elem.value.match(emailExp)) {
            return true;
        } else {
            alert(helperMsg);
            elem.focus();
            return false;
        }
    }

    $("#submitContact").click(function () {

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var msg = document.getElementById('msg');
        if (isAlphabet(name, "Please enter only letters for your name")) {

            if (emailValidator(email, "Please enter a valid email address")) {
                if (notEmpty(msg, "Please state your message")) {
                    document.getElementById('contactAlert').style.display = 'block';
                    document.getElementById('reset').click();

                    return false;
                }
            }
        }
        return false;
    });

});
