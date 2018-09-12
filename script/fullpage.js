let globalOrigin;

$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: false,
        anchors: ["resume", "about", "soft", "portfolio", "contact"],
        afterLoad: function(origin) {
            $('.navLink').removeClass('navActive');
            $('.' + origin).addClass('navActive');
        }
    });
});