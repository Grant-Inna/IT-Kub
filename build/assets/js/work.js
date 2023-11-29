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
            arrows: false,
            fade: true,
            asNavFor: '.slider__month'
         });
      $('.slider__month').slick({
         slidesToShow: 8,
         slidesToScroll: 1,
         asNavFor: '.slider__calendar',
         centerPadding: '60px',
         variableWidth: true,
         dots: false,
         arrows: true,
         centerMode: true,
         focusOnSelect: true,
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
   if ($('.news_img__slider').length > 0) {
      $('.news_img__slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: true,
         loop: true,
         infinite: true
      })
   }
   if ($('.expert_carousel__container').length > 0) {
      $('.expert_carousel__container').slick({
         slidesToShow: 4,
         slidesToScroll: 2,
         dots: false,
         arrows: true,
         loop: false,
         infinite: false,
         responsive: [
            {
               breakpoint: 1300,
               settings: {
                  slidesToShow: 3
               }
            },
            {
               breakpoint: 770,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 2
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
               }
            }
         ]
      })
   }
   
   
   if ($('#container_hackathon').length > 0) {
      $('.hackathon_gallery__holder').slick({
         slidesToShow: 2,
         slidesToScroll: 2,
         dots: true,
         arrows: false,
         loop: true,
         infinite: true,
         centerMode: true,
         centerPadding: '60px',
         responsive: [
            {
               breakpoint: 480,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
               }
            }
         ]
      })
   }
   
   /* новости */
   let image;
   
   if( document.location.hash.length != 0 ) {
      let $news = $(document.location.hash);
      let current_issue = $news.prop('id').split('_')[1],
          day = current_issue.split('-')[0],
          month = current_issue.split('-')[1],
          year = current_issue.split('-')[2];
          
      let date = day + ' / ' + month + ' / ' + year;
      
      showHashNews($news, date, current_issue);
   }
   function showHashNews( current, date, current_issue ) {
      $('.news_one__article').not(current).removeClass('active_news').hide();
      current.addClass('active_news').show();
      $('.news_one__date').text(date);
      
      $('body, html').scrollTop(0);
   }
   
   
   /*  пагинация  */

   
   if($('.materials__pagination_container').length > 0){
      let p_active = 'pagination_active',
          p_disable = 'pagination_disable';
      let current;
      
      $('.' + p_active).on( 'click', false );
      $('.' + p_disable).on( 'click', false );
      // При нажатии на номер или стрелку, получаем айди активного номера пагинации
      // Прибавляем или убавляем номер и делаем активным его
      // Считываем айди нового активного номера пагинации и показываем соответствующий блок новостей
      
      $('.pagination__item').on( 'click', function( event ) {
         if ( !$(event.target).hasClass('pagination_active') && !$(event.target).hasClass('pagination_disable')) {
            current = $('.pagination_show').prop( 'id' ).split('_')[1];
            selectAnotherNumber(event.target, current);
            
         }
         })
   }
   
   function selectAnotherNumber( event, current ) {
      let $show = $('.pagination_show'),
          $active = $('.pagination_active'),
          $disable = $('.pagination_disable'),
          current_p;
      
      $active.removeClass('pagination_active');
      $disable.removeClass('pagination_disable');
      $show.removeClass('pagination_show');
      
      let $id = $(event).prop( 'id' ),
          id = $id.split('_')[1],
          new_id;
      
      let total = $('div[id^="num_"]').length;
     
      
      if ( $id === 'prev' ) {
         new_id = current - 1;
         $('#block_' + new_id).addClass('pagination_show');
         if (new_id <= 1 ) {
            $('#prev').addClass('pagination_disable')
         }
      } else if ( $id === 'next' ) {
         new_id = +current + 1;
          $('#block_' + new_id).addClass('pagination_show');
         if (new_id >= total ) {
            $('#next').addClass('pagination_disable')
         }
      } else {
         current_p = $('#num_' + id).addClass('pagination_active');
         $('#block_' + id).addClass('pagination_show');
         if ( id == 1 ) {
            $('#prev').addClass('pagination_disable')
         } else if ( id >= total ) {
            $('#next').addClass('pagination_disable')
         }
      }
      
      current_p = $('#num_' + new_id).addClass('pagination_active');
      
   }

   
   /*  читать дальше  */

   if ($('#container_congress').length > 0) {
      let $trigger = $('.congress__trigger');
      $trigger.on('click', openList);
      
      $('.congress_gallery__holder').slick({
         slidesToShow: 2,
         slidesToScroll: 2,
         dots: true,
         arrows: false,
         loop: true,
         infinite: true,
         centerMode: true,
         centerPadding: '60px',
         responsive: [
            {
               breakpoint: 480,
               settings: {
                  slidesToScroll: 1,
                  slidesToShow: 1
               }
            }
         ]
      })
   }
   if ($('#container_hackathon').length > 0) {
      let $trigger = $('.schedule__trigger');
      $trigger.on('click', openSchedule);
      
      let $subtrigger = $('.schedule_trigger');
      $subtrigger.on('click', openList);
   }
   
   function openSchedule() {
      let current = $(this).closest('.list_section');
      let answer = current.find('.list'),
          s = 500;
      
      if (!current.hasClass('open')) {
         $('.open').removeClass('open');
         answer.slideDown(s);
         current.addClass('open')
      } else {
         answer.slideUp(s);
         current.removeClass('open')
      }
   }
   function openList() {
      let current = $(this).closest('.schedule_list__holder.list');
      let answer = current.find('.schedule__list'),
          s = 500;
      
      if (!current.hasClass('show')) {
         $('.open').removeClass('show');
         answer.slideDown(s);
         current.addClass('show')
      } else {
         answer.slideUp(s);
         current.removeClass('show')
      }
   }
   
   
   /*  всплывающее окно  */
   
   if($('.semifinalists__container').length > 0) {
      $('.semifinalists__image').on( 'click', showModal)
   }
   function showModal() {
      let current = $(this).prop( 'id').split( '_')[1],
          modal = $('.semifinalist_one__modal#' + current),
          close = modal.find('.modal_close');
      
      modal.show();
      console.log(modal);
      
      close.on( 'click', hideModal);
      modal.on( 'click', hideModal);
      $('.modal_container').on( 'click', function(event) { event.stopPropagation(); return })
   }
   function hideModal() {
      $('.semifinalist_one__modal').hide();
   }
});
