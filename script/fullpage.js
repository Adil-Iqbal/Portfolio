let globalOrigin;

$(document).ready(function() {
    $('#fullpage').fullpage({
        controlArrows: true,
        anchors: ["resume", "about", "soft", "portfolio", "contact"],
        scrollOverflow: true,
        onLeave: function(originIndex, destinationIndex, direction) {
            $('.nav-Link').removeClass('nav-Active');
            if (destinationIndex === 3) {
                $(".fp-controlArrow.fp-prev").css('border-color', 'transparent #c5c1c0 transparent transparent')
                $(".fp-controlArrow.fp-next").css('border-color', 'transparent transparent transparent #c5c1c0')
            }
            if (destinationIndex === 4) {
                $(".fp-controlArrow.fp-prev").css('border-color', 'transparent #29414c transparent transparent')
                $(".fp-controlArrow.fp-next").css('border-color', 'transparent transparent transparent #29414c')
            }
        },
        afterLoad: function(origin) {
            $('.' + origin).addClass('nav-Active');

            // Control arrow color.
            if (origin === "soft") {
                $(".fp-controlArrow.fp-prev").css('border-color', 'transparent #c5c1c0 transparent transparent')
                $(".fp-controlArrow.fp-next").css('border-color', 'transparent transparent transparent #c5c1c0')
            }
            if (origin === "portfolio") {
                $(".fp-controlArrow.fp-prev").css('border-color', 'transparent #29414c transparent transparent')
                $(".fp-controlArrow.fp-next").css('border-color', 'transparent transparent transparent #29414c')
            }
        }
    });
});