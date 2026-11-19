$(function () {
  var n = 5;

  // Click to select a post (used by the tag buttons)
  $('#posts').on('click', '.post', function () {
    $('.post').removeClass('selected');
    $(this).addClass('selected');
  });

  function selectedPost() {
    var $s = $('.post.selected');
    return $s.length ? $s : $('.post').last();
  }

  // 1. Append a new post at the end
  $('#addPost').on('click', function () {
    n++;
    $('#posts').append('<article class="post"><h3>New Post ' + n + '</h3><p>Fresh content for post ' + n + '.</p></article>');
  });

  // 2. Prepend a featured post at the top
  $('#prependPost').on('click', function () {
    n++;
    $('#posts').prepend('<article class="post"><h3>Featured Post ' + n + '</h3><p>This is a featured post.</p></article>');
  });

  // 3. Remove the last post
  $('#removePost').on('click', function () {
    $('#posts .post').last().remove();
  });

  // 4. Tags: .before() puts the tag before the title, .after() after the paragraph
  function tag() { return $('<span class="tag"></span>').text('#' + ($.trim($('#tagText').val()) || 'tag')); }
  $('#tagBefore').on('click', function () { selectedPost().find('h3').before(tag()); });
  $('#tagAfter').on('click', function () { selectedPost().find('p').after(tag()); });

  // 5. Highlight posts containing a keyword
  $('#highlightBtn').on('click', function () {
    var k = $.trim($('#keyword').val()).toLowerCase();
    $('.post').removeClass('kw');
    if (!k) return;
    $('.post').filter(function () {
      return $(this).text().toLowerCase().indexOf(k) > -1;
    }).addClass('kw');
  });
});
