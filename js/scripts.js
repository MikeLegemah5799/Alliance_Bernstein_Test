//////// Hamburger mobile menu 

function mobileNav() {
    var mobileNav = document.getElementById("navBar");
    if (mobileNav.className === "navbar") {
        mobileNav.className += " mobile";
    } else {
        mobileNav.className = "navbar";
    }
}