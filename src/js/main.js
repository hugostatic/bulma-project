$(document).ready(function() {
    
    
     //Mobile menu toggle
     if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function () {

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#" + menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        $(window).scroll(function () {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if (height > 50) {
                $("#navbar-clone").addClass('is-active');
            } else {
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }


    

    // open modal
    $('#bt-modal').click(function() {
        $('#modal-page').css(
            {
                'display': 'block'
            }
        )
    });
    // close modal en cliquant sur la croix
    $('#close-modal').click(function() {
        $('#modal-page').css(
            {
                'display': 'none'
            }
        )    
    });
    // close modal en cliquant sur le background
    $('.modal-background').click(function() {
        $('#modal-page').css(
            {
                'display': 'none'
            }
        )    
    });
});