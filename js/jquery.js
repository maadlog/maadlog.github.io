$(document).ready(function(){
    var toggleAnimation = function(){
        $(this).toggleClass('animatedPic');
    };

    $('#structureLink').on('click', function (event){
        event.preventDefault();
        event.stopPropagation();
    });

    $('[data-toggle="popover"]').popover(); //Initialize PopOvers.

    $('#profile').on('mouseenter',toggleAnimation).on('mouseleave',toggleAnimation).on('touchend',toggleAnimation);
});