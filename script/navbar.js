let mobileMode = false;
let mobileMenuPosition = false;

function toggleMobileMode() {
    if ($(window).width() < 500) {
        mobileMode = true;
    } else {
        mobileMode = false;
    }
}

function toggleNavBehavior() {
    if (mobileMode) {
        $('nav').removeClass('navBarReady');
        if (mobileMenuPosition) {
            liftMobileMenu()
        }
    } else {
        setTimeout(() => {
            $('nav').addClass('navBarReady');
        }, 1500)
    }
}

function dropMobileMenu() {
    $('#navToggle').html('<i class="fas fa-times navToggle"></i>');
    $('nav').addClass('navBarReady');
    $('#navOverlay').css('display', 'block');
    mobileMenuPosition = true;
}

function liftMobileMenu() {
    $('#navToggle').html('<i class="fas fa-bars navToggle"></i>');
    $('nav').removeClass('navBarReady');
    $('#navOverlay').css('display', 'none');
    mobileMenuPosition = false;
}

$(document).ready(function() {
    toggleMobileMode()
    toggleNavBehavior()
    $(window).on('resize', () => {
        // Toggles between mobile and PC menu.
        toggleMobileMode() 
        toggleNavBehavior()
    });

    $(document).on('click', event => {
        let id = event.target.id
        let classes = event.target.className.split(' ');
        // Mobile Only
        // Toggle between active and inactive mobile menu.
        if (mobileMode && (id === 'navToggle' || classes.includes('navToggle'))) {
            if (mobileMenuPosition) {
                liftMobileMenu();
            } else {
                dropMobileMenu();
            }
        }
        // Nav Links
        if (classes.includes('navLink')) {
            $('.navLink').removeClass('navActive');
            $(event.target).addClass('navActive');
        }
    });
})
