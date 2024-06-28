$(function() {
  // 「文字色変化」ボタンをクリックした場合
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
});

  // 「文字内容変化」ボタンをクリックした場合
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
    $('#target').css('color', 'red');
  });

  // 「フェードアウト」ボタンをクリックした場合
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンをクリックした場合
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
    $('#target').text('Hello!');
    $('#target').css('color', 'red');

  });


      
    });
