var stash = [];
showStash();

$('#submit').click(function (e) {
    var value = $('#number').val();
    var number = Number(value);
    stash.push(number);
    showStash();

});

$('#sort').click(function (e) {
    stash = stash.sort(function (a, b) {
        return a > b
    });
    showStash();
});

$('#clean').click(function (e) {
    stash = [];
    showStash();
});

function showStash() {
    $('#stash').text(stash.join(' '));
}
