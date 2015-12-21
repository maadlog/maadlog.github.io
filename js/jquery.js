$(document).ready(function(){
    $('#CV').on('click',function(event){
        event.preventDefault();
        event.stopPropagation();
        $('curriculum').slideToggle('slow');
    });

    var toggleAnimation = function(){
        $(this).toggleClass('animatedPic');
    };

    $('#profile').on('mouseenter',toggleAnimation).on('mouseleave',toggleAnimation).on('touchend',toggleAnimation);

});