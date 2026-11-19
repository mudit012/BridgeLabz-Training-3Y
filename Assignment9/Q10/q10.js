$(function () {
  var existing = ['admin@site.com', 'user@site.com', 'test@site.com']; // simulated registered emails

  // Mark a field invalid (red border via .css()) or valid
  function mark($f, $err, ok, msg) {
    $f.css('border', ok ? '1px solid #16a34a' : '2px solid red');   // 5. dynamic red border
    $err.text(ok ? '' : msg);
    return ok;
  }

  $('#regForm').on('submit', function (e) {
    e.preventDefault();
    $('#result').empty();

    // 1. Name must not be empty
    var okName = mark($('#name'), $('#nameErr'), $.trim($('#name').val()) !== '', 'Name is required.');

    // 2. Email: valid format + unique
    var email = $.trim($('#email').val()).toLowerCase();
    var validFmt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var okEmail = mark($('#email'), $('#emailErr'), validFmt, 'Enter a valid email address.');
    if (okEmail) okEmail = mark($('#email'), $('#emailErr'), $.inArray(email, existing) === -1, 'This email is already registered.');

    // 3. Password minimum 8 characters
    var okPass = mark($('#password'), $('#passErr'), $('#password').val().length >= 8, 'Password must be at least 8 characters.');

    // 4. Success message when everything is valid
    if (okName && okEmail && okPass) {
      existing.push(email);
      $('<p class="msg"></p>').text('Registration successful! Welcome, ' + $.trim($('#name').val()) + '.').appendTo('#result');
      this.reset();
      $('#regForm input').css('border', '');
    }
  });
});
