$(function () {
  // Pick the banner(s) chosen in the dropdown
  function targets() {
    var v = $('#target').val();
    return v === 'all' ? $('.banner') : $('.banner[data-id="' + v + '"]');
  }

  // 1-4. One handler for all effect buttons; the method name is stored in data-act
  $('button[data-act]').on('click', function () {
    var act = $(this).data('act');       // hide, show, slideUp, slideDown, fadeOut, fadeIn
    targets()[act](400);                 // call the jQuery effect dynamically
  });

  // 5. Auto-rotate through slides every 5 seconds using fadeOut()/fadeIn()
  var $slides = $('#rotator .slide'), current = 0;
  $slides.eq(0).css('display', 'flex');
  setInterval(function () {
    $slides.eq(current).fadeOut(500, function () {
      current = (current + 1) % $slides.length;
      $slides.eq(current).css('display', 'none').fadeIn(500).css('display', 'flex');
    });
  }, 5000);
});
