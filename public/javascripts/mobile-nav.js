/**
 * Created by Sujan on 10/1/2016.
 */

$(document).ready(function(){
    $('.resp-navicon').click(function(){
       $('#cssmenu ul').toggle();
        $(this).children('.fa').toggleClass('fa-angle-double-up','fa-bars');
    });
    if ($(window).width() < 793) {
        $('#cssmenu ul li:first-child a').html(' Home');
    }


});