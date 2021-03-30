// JQuery Code //
$(document).ready(function () {
    // SuperSlides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

// JS Code //

// Typed JS
    var typed = new Typed(".typed", {
        strings: ["Web Developer.", "Full Stack.", "Always Learning."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    // Owl-Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    // Easy-Pie-Chart
    $('.chart').easyPieChart({
        //your options goes here
    });
});