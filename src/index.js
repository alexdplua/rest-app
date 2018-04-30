import './scss/main.scss';

jQuery(document).ready(function () {
      $('.menu-button').click(function () {
          $('.menu-wrap').addClass('menu-wrap__show');
          $('.menu-wrap__mask').addClass('menu-wrap__mask-show');
      })

    $('.menu-close').click(function () {
        $('.menu-wrap').removeClass('menu-wrap__show');
        $('.menu-wrap__mask').removeClass('menu-wrap__mask-show');
    })


});
