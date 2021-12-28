(function($) {
    $(function() {
      $('.menu-btn').click(function() {
        $('aside').toggleClass('open');
        $('span').toggleClass('burger');
        $('.conteiner').toggleClass('blur');
      });
    });
})(jQuery);