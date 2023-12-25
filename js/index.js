$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $('.ui-to-top').show();
    } else {
        $('.ui-to-top').hide();
    }
});

$(document).ready(function () {
	$(".ui-to-top").hide();
    $(".ui-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
	
    // wow js init;
    new WOW().init();

    $('.owl-1-col').owlCarousel({
        loop: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='fal fa-chevron-right'></i>",
            "<i class='fal fa-chevron-left'></i>"
        ],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $(".owl-customer").owlCarousel({
        loop: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 4
            },
            700: {
                items: 4
            },
            500:{
                items:2
            },
            400:{
                items:1
            }

        }
    });
    $('.box-count').waypoint(function() {
            $(".count").each(function () {
                const options = {
                    useEasing: true,
                    useGrouping: false,
                    separator: ',',
                    decimal: '.',
                };
                const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
                if (!counter.error) {
                    counter.start();
                } else {
                    console.error(counter.error);
                }
            });
            this.destroy();
        }
        , {
            offset: '100%'
        });
    $(".owl-comment").owlCarousel({
        loop: false,
        rtl: false,
        margin: 20,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: false,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 3
            },
            700: {
                items: 3
            },
            500:{
                items:2
            },
            400:{
                items:1
            }

        }
    });
    });