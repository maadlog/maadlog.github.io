$(document).ready(function(){
    var toggleAnimation = function(){
        $(this).toggleClass('animatedPic');
    };

    $('#structureLink').on('click', function (event){
        event.preventDefault();
        event.stopPropagation();
    });

    $('#rickTrigger').on('click',function(event){
        event.preventDefault();
        event.stopPropagation();
        $('#rickRoll').slideToggle();

    })

    $('#profile').on('mouseenter',toggleAnimation).on('mouseleave',toggleAnimation).on('touchend',toggleAnimation);
});