$(function () {
  // 1. Click question -> toggle its answer
  $('.question').on('click', function () {
    $(this).next('.answer').slideToggle(200);
  });

  // 2. Hover -> change question colour
  $('.question').hover(
    function () { $(this).css('color', '#2563eb'); },
    function () { $(this).css('color', ''); }
  );

  // 3. Double-click question -> collapse all answers
  $('.question').on('dblclick', function () {
    $('.answer').slideUp(200);
  });

  // 4. Focus on input -> highlight parent question
  $('.answer input').on('focus', function () {
    $(this).closest('.faq-item').find('.question').css('background-color', '#fef08a');
  });

  // 5. Blur -> reset background colour
  $('.answer input').on('blur', function () {
    $(this).closest('.faq-item').find('.question').css('background-color', '');
  });
});
