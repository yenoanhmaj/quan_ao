$(document).ready(function(){
    $(".menu li").hover(function(){
      $(this).find('ul:first').slideDown('500');
    }, function() {
        $(this).find('ul:first').slideDown('500');
      });

    $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      // console.log(pos_body);
      if(pos_body>40){
         $('.menu').addClass('co-dinh-menu');
      }
      else {
         $('.menu').removeClass('co-dinh-menu');
      }
      
   });
   
  
  });