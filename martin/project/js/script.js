// Click music buttons
ion.sound({
    sounds: [
        {
            name: 'magic-effect'
       , }
   ]
    , volume: 0.5
    , path: 'audio/'
    , preload: true
});

$(document).ready(function () {
    $('.book-btn').click(function () {
        ion.sound.play('magic-effect');
    });
});


// End click music buttons

// Rayting 5 star
$(document).ready(function () {
    //  Check Radio-box
    $(".rating input:radio").attr("checked", false);
    $('.rating input').click(function () {
        $(".rating span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
        function () {
            var userRating = this.value;
            alert(userRating);
        });
});
// End rayting

// Magic cursor

$(document).ready(function () {
    $('body').jstars({
        image_path: 'img/'
        , style: 'blue'
        , frequency: 14
    });
});
// End of Magic cursor

// Turn js book modal

$(document).ready(function () {
    $("#flipbook").turn({
        width: 750,
        height: 550,
        autoCenter: true
    });
});