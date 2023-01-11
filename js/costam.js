$(document).ready(function () {

    $('#main_slid').owlCarousel({
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
                items: 1
            }
        }
    });

    $('#main_itm').owlCarousel({
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
                items: 4
            }
        }
    });



    // $('.clon').click(function() {


    //     $('.hov_icon').toggleClass('acon  acoff');


    // });

    // $('.con').click(function(){
    //     $(this).addClass(' acon')
    // })





});