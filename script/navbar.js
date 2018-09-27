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
        $('nav').removeClass('nav-Ready');
        if (mobileMenuPosition) {
            liftMobileMenu()
        }
    } else {
        setTimeout(() => {
            $('nav').addClass('nav-Ready');
        }, 1500)
    }
}

function dropMobileMenu() {
    $('#nav-Toggle').html('<i class="fas fa-times nav-Toggle"></i>');
    $('nav').addClass('nav-Ready');
    $('#nav-Overlay').css('display', 'block');
    mobileMenuPosition = true;
}

function liftMobileMenu() {
    $('#nav-Toggle').html('<i class="fas fa-bars nav-Toggle"></i>');
    $('nav').removeClass('nav-Ready');
    $('#nav-Overlay').css('display', 'none');
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
        if (mobileMode && (id === 'nav-Toggle' || classes.includes('nav-Toggle'))) {
            // Toggle between active and inactive mobile menu.
            if (mobileMenuPosition) {
                liftMobileMenu();
            } else {
                dropMobileMenu();
            }
        }
    });
})
