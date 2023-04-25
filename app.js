const mobileMenu = document.getElementById('mobileMenu');
const navbarMenu = document.getElementById('navbarMenu');

document.onclick = function(e) {
    if(e.target.id !== 'mobileMenu' && e.target.id !== 'navbarMenu') {
        mobileMenu.classList.remove('active');
        navbarMenu.classList.remove('active');
    }
}

mobileMenu.onclick = function() {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
}



