$(document).ready(function() {
    $('#light-mode-btn').click(function() {
        $('body').removeClass('dark-mode').addClass('light-mode');
    });

    $('#dark-mode-btn').click(function() {
        $('body').removeClass('light-mode').addClass('dark-mode');
    });
});
