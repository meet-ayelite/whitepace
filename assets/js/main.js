const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const navLinks = document.querySelector('.menu-bar');

menuOpen.addEventListener('click', () => {
    navLinks.classList.add('show-menu');
});

menuClose.addEventListener('click', () => {
    navLinks.classList.remove('show-menu');

});

var isMobile;
function checkDevice() {
    isMobile = navigator.userAgentData.mobile;

    if (isMobile){
        console.log('Mobile', isMobile);
    }
    else{
        console.log('Desktop', isMobile);
    }
}

window.addEventListener('load', checkDevice);