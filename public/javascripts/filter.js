
$(document).ready(function(){
    //input click togle sibling ul
    $('.filter ul li input').click(function(){
       // alert($(this).parent().next('ul').text());
        $(this).parent().next('ul').toggle();
    }).blur(function(){
        $(this).parent().next('ul').fadeOut();
    });

    //Chainging the value of the filter-btn//
    //saving default values of input button
    // var valueZ = $('.filter ul li').text(); didnt work
    var defocc = $('.occ').val();
    var defpr = $('.pr').val();
    var defcl = $('.cl').val();
    var defty = $('.ty').val();

    $('.filter-opt li').click(function(){
        var valueX = $(this).children('span').text();
        $(this).parent().prev('li').children('input').val(valueX).css('background','linear-gradient(to bottom right, rgb(0, 235, 155),  #00aa70)');

        //Part of the code that couldn't be optimized

        $('.occasion-opt li').click(function(){
            $('.occ').siblings('.fa').removeClass('fa-sort-desc').addClass('fa-times').click(function(){
                $('.occ').siblings('.fa').removeClass('fa-times').addClass('fa-sort-desc');
                $('.occ').val(defocc).css('background','linear-gradient(to bottom right, #ffc04c, #996300)');


            });
        });

        $('.price-range-opt li').click(function(){
            $('.pr').siblings('.fa').removeClass('fa-sort-desc').addClass('fa-times').click(function(){
                $('.pr').siblings('.fa').removeClass('fa-times').addClass('fa-sort-desc');
                $('.pr').val(defpr).css('background','linear-gradient(to bottom right, #ffc04c, #996300)');

            });
        });

        $('.color-opt li').click(function(){
            $('.cl').siblings('.fa').removeClass('fa-sort-desc').addClass('fa-times').click(function(){
                $('.cl').siblings('.fa').removeClass('fa-times').addClass('fa-sort-desc');
                $('.cl').val(defcl).css('background','linear-gradient(to bottom right, #ffc04c, #996300)');

            });
        });
        $('.type-opt li').click(function(){
            $('.ty').siblings('.fa').removeClass('fa-sort-desc').addClass('fa-times').click(function(){
                $('.ty').siblings('.fa').removeClass('fa-times').addClass('fa-sort-desc');
                $('.ty').val(defty).css('background','linear-gradient(to bottom right, #ffc04c, #996300)');

            });
        });

    });

    $('.fa-empire').click(function(){
        $('.filter ul:not(.filter-opt)').toggle();
        $('img').css('opacity','0.3');
        // $('.filter ul:not(.filter-opt)').css('opacity','1');
    });
    $('.fa-times').click(function(){
       // $(this).prev('input').css('color','red');
        alert('xxx');
    });



});




