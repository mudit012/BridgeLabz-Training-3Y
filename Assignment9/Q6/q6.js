$(function () {
  // 5. Insert a success message into the DOM, then fade it away
  function showMessage(text) {
    $('<p class="msg"></p>').text(text).appendTo('#messages')
      .delay(2000).fadeOut(400, function () { $(this).remove(); });
  }

  // Attach .on() handlers to one topic (used for existing AND newly added topics)
  function bindTopic($li) {
    var title = $li.find('.title').text();
    // 1. Subscribe -> enable notifications
    $li.find('.sub').on('click.topic', function () {
      $li.find('.status').text('Notifications on').addClass('on');
      showMessage('Subscribed to ' + title);
    });
    // 2. Unsubscribe -> disable notifications
    $li.find('.unsub').on('click.topic', function () {
      $li.find('.status').text('Notifications off').removeClass('on');
      showMessage('Unsubscribed from ' + title);
    });
    // 4. Remove -> detach events with .off() then delete the item
    $li.find('.rm').on('click.topic', function () {
      $li.find('button').off('click.topic');
      $li.slideUp(200, function () { $li.remove(); });
      showMessage('Removed topic ' + title);
    });
  }

  $('#topics .topic').each(function () { bindTopic($(this)); });

  // 3. Dynamically add a new topic and bind events to it
  $('#addTopic').on('click', function () {
    var t = $.trim($('#newTopic').val());
    if (!t) { showMessage('Please enter a topic name.'); return; }
    var $li = $(
      '<li class="topic"><span class="title"></span><span class="status">Notifications off</span>' +
      '<span><button class="sub">Subscribe</button><button class="unsub">Unsubscribe</button><button class="rm">Remove</button></span></li>');
    $li.find('.title').text(t);
    $('#topics').append($li);
    bindTopic($li);
    $('#newTopic').val('');
    showMessage('Added topic ' + t);
  });
});
