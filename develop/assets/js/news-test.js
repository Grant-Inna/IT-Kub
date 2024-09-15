$(document).ready(function () {
   
   
   
   /* новости */
   
   if ($('#container_news_new').length > 0) {
      
      $('.news__more').on( 'click', (event) => {
               event.preventDefault();

         let $id = $(event.target).prop( 'href').split('#')[1];
         let day = $id.split('-')[1],
             month = $id.split('-')[1],
             year = $id.split('-')[2];
         
         let date = day + ' / ' + month + ' / ' + year;
         showHashNews( $('#' + $id), date, $id);
      });
      
      if( document.location.hash.length != 0 && $('#container_meetings').length == 0) {
         
         let $news = $(document.location.hash);
             console.log($news);
             console.log('это там хэш');
         let current_issue = $news.prop('id').split('_')[1],
             day = current_issue.split('-')[0],
             month = current_issue.split('-')[1],
             year = current_issue.split('-')[2];
             
         let date = day + ' / ' + month + ' / ' + year;
         
         showHashNews($news, date, current_issue);
      }
      
      function showHashNews( current, date, current_issue ) {
         $('.grand_news__container').addClass('show');
         $('.one_news__container').show(200);
         $('.news_one__article').not(current).removeClass('active_news').hide();
         current.addClass('active_news').show();
         $('.news_one__date').text(date);
         
         $('body, html').scrollTop($('.news__container .wrapper').position().top);
      }
      
      $('#one_news__close').on( 'click', () => {
         $('.one_news__container').hide(200);
         $('.grand_news__container').removeClass('show');
      });
      
      
      
      $('.news_img__slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         arrows: true,
         loop: true,
         infinite: true
      })
  
   }
});
