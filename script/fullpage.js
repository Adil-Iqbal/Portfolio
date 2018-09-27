let globalOrigin;

$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: true,
        anchors: ["resume", "about", "soft", "portfolio", "contact"],
        scrollOverflow: true,
        onLeave: function() {
            $('.nav-Link').removeClass('nav-Active');
        },
        afterLoad: function(origin) {
            $('.' + origin).addClass('nav-Active');
        }
    });
});