$(document).ready(function () {
   /* читать дальше */
   
 /*  if ($('.element__more').length > 0) {
      
      let $element__more = $('.element__more'),
          $hide = $('.hidden'),
          $arrow = $('.element__more_arrow'),
          $text = $('.element__more_text'),
          $link = $('.element__link span');
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         let parent = $(this).closest('.element__holder');
         
         if (!parent.hasClass('open')) {
            
            $('.open').removeClass('open');
            $hide.slideUp(400);
            $link.fadeOut();
            $('.element__holder').removeClass('open');
            $text.html('Развернуть');
            
            parent.find($hide).slideDown(400); // ради чего всё затевалось - показать скрытое
            parent.find($link).fadeIn();
            parent.addClass('open');
            $(this).find($text).html('Свернуть');
            
         } else {
            parent.find($hide).slideUp(400);
            parent.find($link).fadeOut();
            parent.removeClass('open');
            $(this).find($text).html('Развернуть');
         }
      }
      
   }*/
   
   /* плавный скрол */
   
   if ($('#totop').length > 0) {
    
      $('#totop').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
   }
   
   /* боковое меню */
   const width = $(document).width();
   
   if ($('.menu__mobile').length > 0) {
      
      var menu_width;
      
      if (width < 380) {
         menu_width = width * 0.7
      } // Ширина меню зависит от размера экрана
      else if (width < 450) {
         menu_width = width * 0.7
      } else {
         menu_width = width * 0.6
      }
      
      var $mobile_trigger = $('.wrapper .menu__mobile'),
         $mobile_menu = $('.menu__mobile_container'),
         $mobile_icon = $('.menu__mobile_icon'),
         $mobile_cross = $('.menu__mobile_container .menu__mobile'),
         $blackLayer = $('#black_back');
   
      $mobile_trigger.on('click', showAsideMenu);
      
      var menu_show_style = {
         right: 0,
         opacity: '1'
      };
      
   }
   function showAsideMenu() {
      $blackLayer.show();
      $mobile_menu.css( 'width', menu_width);
   
      $mobile_trigger.addClass('show_aside');
      
      $mobile_menu.show().animate(menu_show_style, 7, function() {
         $mobile_trigger.fadeOut();
      });
      $mobile_cross.addClass('show_aside');
      $mobile_cross.on( 'click', hideAsideMenu);
      $blackLayer.on( 'click', hideAsideMenu);
      
      $mobile_trigger.off('click', showAsideMenu);
   }
   function hideAsideMenu() {
      $blackLayer.hide();
      $mobile_trigger.removeClass('show_aside').show();
      $mobile_cross.removeClass('show_aside');
      
      $mobile_menu.css( 'width', '0');
      $mobile_menu.hide().prop( 'style', '');
      
      $mobile_cross.off( 'click', hideAsideMenu);
      $blackLayer.off( 'click', hideAsideMenu);
      $mobile_trigger.on('click', showAsideMenu);
   }
});
