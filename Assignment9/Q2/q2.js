$(function () {
  // 4. Attribute selector: style discounted products
  $('.product[data-discount="true"]').addClass('discount');

  // 1 + 5. Click product -> highlight; alert if out of stock (data attribute)
  $('.product').on('click', function () {
    $('.product').removeClass('highlight');
    $(this).addClass('highlight');
    if (parseInt($(this).data('stock'), 10) === 0) {
      alert($(this).find('h3').text() + ' is out of stock!');
    }
  });

  // 2. Hover -> show additional details
  $('.product').hover(
    function () { $(this).find('.details').stop(true, true).slideDown(150); },
    function () { $(this).find('.details').stop(true, true).slideUp(150); }
  );

  // 3. Favorite icon toggles "selected" class (stopPropagation so product click doesn't fire)
  $('.fav').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('selected');
  });
});
