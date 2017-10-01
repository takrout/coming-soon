$(document).ready(function() {
    $('.video-backgound').vide('video/background.mp4');

    $('#clock').countdown('2017/10/15 23:59:59', function(event) {
        $(this).html(event.strftime('%D Jours %H:%M:%S'));
    });
});