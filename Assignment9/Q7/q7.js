$(function () {
  var $courses = $('.course');
  // Remember the original text so highlighting can be reset
  $courses.each(function () { $(this).data('orig', $(this).text()); });

  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function updateCount() {
    $('#count').text('Matched courses: ' + $courses.filter(':visible').length + ' of ' + $courses.length);
  }

  // 1. Real-time filtering on keyup
  $('#search').on('keyup', function () {
    var q = $.trim($(this).val());
    $courses.each(function () {
      var $c = $(this), text = $c.data('orig');
      if (q === '') { $c.text(text).show(); return; }
      var re = new RegExp('(' + escapeRegex(q) + ')', 'ig');
      var match = re.test(text);
      // 3. Toggle visibility depending on match
      $c.toggle(match);
      if (match) {
        // 2. Highlight matched text: wrap it in span and style via .css()
        $c.html(text.replace(new RegExp('(' + escapeRegex(q) + ')', 'ig'), '<span class="m">$1</span>'));
        $c.find('.m').css({ 'background-color': '#fde68a', 'font-weight': 'bold' });
      }
    });
    // 4. Update matched count
    updateCount();
  });

  // 5. Clear -> show everything again
  $('#clear').on('click', function () {
    $('#search').val('');
    $courses.each(function () { $(this).text($(this).data('orig')).show(); });
    updateCount();
  });

  updateCount();
});
