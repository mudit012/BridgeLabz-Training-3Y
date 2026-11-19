// jq1 = jQuery 1.12.4, jq2 = jQuery 3.7.1 (both created with jQuery.noConflict(true) in q9.html)

// ---- Version 1: carousel rotation + active widget highlight ----
(function ($) {
  $(function () {
    var $s = $('#carousel .slide'), i = 0;
    $s.eq(0).css('display', 'flex');
    setInterval(function () {                       // 1. rotate carousel every 3s
      $s.eq(i).fadeOut(400, function () {
        i = (i + 1) % $s.length;
        $s.eq(i).css('display', 'none').fadeIn(400).css('display', 'flex');
      });
    }, 3000);

    $('.widget').on('click', function () {          // 3. highlight active widget
      $('.widget').removeClass('active');
      $(this).addClass('active');
    });
  });
})(jq1);

// ---- Version 2: modal popup + tooltips ----
(function ($) {
  $(function () {
    $('#openModal').on('click', function (e) {       // 2. modal popup
      e.stopPropagation();
      $('#modal').css('display', 'flex').hide().fadeIn(200);
    });
    $('#closeModal, #modal').on('click', function (e) {
      if (e.target === this) $('#modal').fadeOut(200);
    });

    $('.has-tip').on('mouseenter', function () {     // 4. tooltips on hover
      $('#tip').text($(this).data('tip')).show();
    }).on('mousemove', function (e) {
      $('#tip').css({ left: e.pageX + 12, top: e.pageY + 12 });
    }).on('mouseleave', function () {
      $('#tip').hide();
    });

    // Proof that both versions run together
    console.log('jq1 version:', jq1.fn.jquery, '| jq2 version:', $.fn.jquery);
  });
})(jq2);
