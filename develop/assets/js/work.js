$(document).ready(function () {
   /* читать дальше */
   
   if ($('.element__more').length > 0) {
      
      let $element__more = $('.element__more'),
          $hide = $('.hidden'),
          $arrow = $('.element__more_arrow'),
          $text = $('.element__more span'),
          $link = $('.element__link span');
      
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         let parent = $(this).closest('.footer__section');
         
         if (!parent.hasClass('open')) {
            
            $('.open').removeClass('open');
            $hide.slideUp(400);
            $link.fadeOut();
            $('.footer__section').removeClass('open');
            $text.html('Подробнее');
            
            parent.find($hide).slideDown(400); // ради чего всё затевалось - показать скрытое
            parent.find($arrow).addClass('rotate');
            parent.find($link).fadeIn();
            parent.addClass('open');
            $(this).find($text).html('Скрыть');
            
         } else {
            parent.find($hide).slideUp(400);
            parent.find($link).fadeOut();
            parent.removeClass('open');
            $(this).find($text).html('Подробнее');
            $arrow.removeClass('rotate');
         }
      }
      
   }
   
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
   /* слайдер */
   
   if ($('#events_calendar__slider').length > 0 ) {
      $('.slider__calendar').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 400,
            arrows: false,
            fade: true,
            asNavFor: '.slider__month'
         });
      $('.slider__month').slick({
         slidesToShow: 8,
         slidesToScroll: 1,
         asNavFor: '.slider__calendar',
         speed: 400,
         centerPadding: '60px',
         variableWidth: true,
         dots: false,
         arrows: true,
         centerMode: true,
         focusOnSelect: true,
         cssEase: 'easy-in-out',
         responsive: [
            {
               breakpoint: 1400,
               settings: {
                  centerPadding: '50px',
                  slidesToShow: 8
               }
            },
            {
               breakpoint: 1270,
               settings: {
                  centerPadding: '50px',
                  slidesToShow: 7
               }
            },
            {
               breakpoint: 950,
               settings: {
                  centerPadding: '50px',
                  slidesToShow: 5
               }
            },
            {
               breakpoint: 770,
               settings: {
                  centerPadding: '40px',
                  slidesToShow: 4
               }
            },
            {
               breakpoint: 600,
               settings: {
                  centerPadding: '40px',
                  slidesToShow: 3
               }
            },
            {
               breakpoint: 450,
               settings: {
                  centerPadding: '30px',
                  slidesToShow: 2
               }
            },
            {
               breakpoint: 370,
               settings: {
                  centerPadding: '20px',
                  slidesToShow: 1
               }
            }
         ]
      
      });
   }
   
});
