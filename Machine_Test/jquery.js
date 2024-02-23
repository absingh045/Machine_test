$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Change slide every 2 seconds
        dots: true, // Show dots for navigation
        arrows: true // Show arrows for navigation
        // You can customize further options as needed
    });
     // $('.client_small_image img').click(function() {

    //     // Update large image
    //     var largeImgSrc = $(this).attr('src');
    //     $('.client_large img').attr('src', largeImgSrc);
    // });

    $('.client_small_image img').click(function() {
        // Hide all content paragraphs
        $('.client_content > p').hide();

        // Show the content associated with the clicked image
        var target = $(this).data('target');
        $(target).show();

        // Remove active class from all small images
        $('.client_small_image img').removeClass('active');

        // Add active class to the clicked image
        $(this).addClass('active');

        // Update large image
        var largeImgSrc = $(this).attr('src');
        $('.client_large img').attr('src', largeImgSrc);
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var header = $('#header');
        var headerHeight = header.outerHeight();

        // Change background color when scrolling down
        if (scroll > headerHeight) {
            header.css('background-color', '#333'); // Change to your desired background color
        } else {
            header.css('background-color', 'transparent'); // Change to your default background color
        }
    });
});
