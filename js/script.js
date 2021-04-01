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
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })

    // scroll down pie chart animation
    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {
        // console how far you are from top (scroll position)
        // console.log(window.pageYOffset)
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // Easy-Pie-Chart
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent) {
                    $(this.el).find('percent').text(Math.round(percent));
                }
            });
        }
    });
});