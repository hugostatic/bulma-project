$(document).ready(function() {
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