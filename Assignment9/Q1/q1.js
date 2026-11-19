$(function () {
  var name = 'Guest';
  var quotes = [
    'The best way to predict the future is to create it.',
    'Small steps every day lead to big results.',
    'Do something today that your future self will thank you for.',
    'Dream big. Start small. Act now.',
    'Success is the sum of small efforts repeated daily.'
  ];

  // Choose greeting by the current hour of the day
  function timeGreeting() {
    var h = new Date().getHours();
    var part = h < 12 ? 'Morning' : (h < 17 ? 'Afternoon' : 'Evening');
    return 'Good ' + part + ', ' + name + '!';
  }

  // 1. On page load -> personalised greeting
  $('#greeting').text(timeGreeting());

  $('#setName').on('click', function () {
    name = $.trim($('#username').val()) || 'Guest';
    $('#greeting').text(timeGreeting());
  });

  // 2. Change greeting to a random motivational quote
  $('#changeGreeting').on('click', function () {
    $('#greeting').text(quotes[Math.floor(Math.random() * quotes.length)]);
  });

  // 3. Toggle welcome message visibility
  $('#toggleWelcome').on('click', function () {
    $('#welcomeMsg').toggle();
  });

  // 4. Alert when greeting is clicked
  $('#greeting').on('click', function () {
    alert('You clicked the greeting: ' + $(this).text());
  });
});
