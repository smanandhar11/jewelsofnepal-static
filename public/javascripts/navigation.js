/**
 * Created by Sujan on 9/20/2016.
 */
$(document).ready(function(){
   $('#cssmenu ul li').click(function(){
      $('#cssmenu ul li').each(function(){
         $(this).removeClass('active');
      });
       $(this).addClass('active');
   });
});