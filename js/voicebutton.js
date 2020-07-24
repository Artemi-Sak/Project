$(document).ready(function () {
  let button = $('#button-voice');
  button.on('click', function () {
  });
  button.on('click', function () {
    let player = $('#video-player')
    player.prop('muted', !player[0].muted)
  });
});
