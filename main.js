$(document).on('pagecreate', function(event) {
    $(window).on('orientationchange', function() {
        if ($(window).orientation != 0) {
            $('#fb').addClass('fa-2x');
            $('#li').addClass('fa-2x');
            $('#gh').addClass('fa-2x');
            $('#mail').addClass('fa-2x');
            $('#fb').removeClass('fa-3x');
            $('#li').removeClass('fa-3x');
            $('#gh').removeClass('fa-3x');
            $('#mail').removeClass('fa-3x');
        }
        else{
            $('#fb').addClass('fa-3x');
            $('#li').addClass('fa-3x');
            $('#gh').addClass('fa-3x');
            $('#mail').addClass('fa-3x');
            $('#fb').removeClass('fa-2x');
            $('#li').removeClass('fa-2x');
            $('#gh').removeClass('fa-2x');
            $('#mail').removeClass('fa-2x');
        }
    })
})
