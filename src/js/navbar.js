export let mobileMode = false;
export let mobileMenuPosition = false;

export function toggleMobileMode() {
    if ($(window).width() < 500) {
        mobileMode = true;
    } else {
        mobileMode = false;
    }
}

export function toggleNavBehavior() {
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

export function dropMobileMenu() {
    $('#nav-Toggle').html('<i class="fas fa-times nav-Toggle"></i>');
    $('nav').addClass('nav-Ready');
    $('#nav-Overlay').css('display', 'block');
    mobileMenuPosition = true;
}

export function liftMobileMenu() {
    $('#nav-Toggle').html('<i class="fas fa-bars nav-Toggle"></i>');
    $('nav').removeClass('nav-Ready');
    $('#nav-Overlay').css('display', 'none');
    mobileMenuPosition = false;
}

export function navbar() {
    toggleMobileMode()
    toggleNavBehavior()
    $(window).on('resize', () => {
        // Toggles between mobile and PC menu.
        toggleMobileMode() 
        toggleNavBehavior()
    });

    $(document).on('click', event => {
        if (event === undefined) {
            return;
        }
        let target = event.target;
        let id, classes;
        if (target.className instanceof SVGAnimatedString) {
            // If you click on the icon, get the parent's data.
            id = target.parentElement.id;
            classes = target.parentElement.className.baseVal.split(' ');
        } else {
            // If you click on the parent, get the parent's data.
            id = target.id;
            classes = target.className.split(' ');
        }
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
}
