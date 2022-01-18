//slideShow from W3.org
var slide = 0;

function showBanner() {
    "use strict";
    var i;
    var slides = document.getElementsByClassName("banner-inner");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slide++;
    if (slide > slides.length) {
        slide = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide - 1].style.display = "block";
    dots[slide - 1].className += " active";
    setTimeout(showBanner, 5000); // Change image every 2 seconds
}
showBanner();

function plusDivs(n) {
    "use strict";
    showDivs(slide += n);
}

function showDivs(n) {
    "use strict";
    var i;
    var x = document.getElementsByClassName("banner-inner");
    if (n > x.length) {
        slide = 1;
    }
    if (n < 1) {
        slide = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slide - 1].style.display = "block";
}
