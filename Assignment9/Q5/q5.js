$(function () {
  // 1. Click a manager -> highlight all direct reports (matched via data-manager)
  $('.manager .name').on('click', function () {
    $('.member').removeClass('hl');
    var id = $(this).parent().data('id');
    $('.employee[data-manager="' + id + '"]').addClass('hl');
  });

  // 2. Hover employee -> show contact info using .next()
  $('.member .name').hover(
    function () { $(this).next('.contact').fadeIn(150); },
    function () { $(this).next('.contact').fadeOut(150); }
  );

  // 3. Click department title -> colour all its members using .children()
  $('.dept-title').on('click', function () {
    $('.member').css('background-color', '');
    $(this).closest('.dept-head').next('.members').children().css('background-color', '#fde68a');
  });

  // 4. Random employee -> highlight its siblings
  $('#randomBtn').on('click', function () {
    $('.member').removeClass('hl').css('background-color', '');
    var $all = $('.employee');
    var $pick = $all.eq(Math.floor(Math.random() * $all.length));
    $pick.siblings().addClass('hl');          // siblings highlighted
    $pick.css('background-color', '#bbf7d0'); // picked employee in green
  });

  // 5. Collapse / expand team using .parent() and .find()
  $('.collapse').on('click', function () {
    $(this).parent().parent().find('.members').slideToggle(200);
  });
});
