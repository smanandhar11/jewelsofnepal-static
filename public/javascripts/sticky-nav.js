$(document).ready(function(){
    var mn = $('nav');

    $(window).scroll(function(){
        if($(this).scrollTop()>110){
            mn.addClass("nav-scrolled");
        }
        
        else{
            mn.removeClass("nav-scrolled");
        }
    });
});

