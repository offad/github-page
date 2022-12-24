//Borrowed from https://stackoverflow.com/q/21765592
function get_spotify() {
    //header("Access-Control-Allow-Origin: *");
    $.ajax({
        type: 'POST',
        url: '/last.fm.php',
        data: { request: 'true' },
        success: function(reply) {
            console.log(reply);
            $('.now-playing').html("<p>" + reply + "</p>");
        }
    });
}
window.onload = get_spotify;
