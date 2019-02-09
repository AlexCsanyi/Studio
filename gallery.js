let slideIndex = 1;
showSlides(slideIndex);

// next and prev controls pictures

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentDiv(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" current", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " current";
}

let numberIndex = 1;
showNumbers(numberIndex);

// next and prev controls numbers

function plusNumbers(n) {
    showNumbers(numberIndex += n);
}

function showNumbers(n) {
    let i;
    let numbers = document.getElementsByClassName("myNumbers");
    if (n > numbers.length) {numberIndex = 1}
    if (n < 1) {numberIndex = numbers.length}
    for (i = 0; i < numbers.length; i++) {
        numbers[i].style.display = "none";
    }
    numbers[numberIndex-1].style.display = "flex";
}