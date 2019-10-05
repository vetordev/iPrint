var navbar = 0;
function showNavbar(){
    navbar = document.getElementById("navbar");
    if (navbar.style.display != 'block')
        navbar.style.display = 'block';
    else navbar.style.display = 'none';
}

window.onresize = function() {
    navbar = document.getElementById("navbar");
    if (window.innerWidth >= 1201) navbar.style.display = 'none';
}