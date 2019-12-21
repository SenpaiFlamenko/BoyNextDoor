//Randomaizer

var part1 = ['DANCING', 'FLYING', 'CYBER', 'MAGICAL', 'SHINING', 'STRAY', 'EFFICACIOUS', 'COORDINATED', 'WHIMSICAL', 'CURIOUS', 'FOOLISH', 'RECEPTIVE', 'UNHEALTHY', 'MURKY', 'ADJOINING', 'DULL', 'FERTILE', 'DAILY', 'CURVY', 'DELIRIOUS', 'SCANDALOUS', 'RUDE', 'HALF', 'AWAKE', 'SUBDUED', 'IDIOTIC', 'ADAMANT', 'SASSY', 'TEMPORARY', 'WILLING'];
var part2 = ['KNIGHT', 'FAIRY', 'PAN', 'ARM', 'CAT', 'MINT', 'ADVICE', 'LIBRARY', 'HEAD', 'CAPTION', 'WRENCH', 'FLOWERS', 'SURPRISE', 'JUDGE', 'QUILT', 'PROSE', 'YAM', 'PLASTIC', 'BOOKS', 'GRAIN', 'SUGGESTION', 'ACCOUNT', 'ROOF', 'CLASS', 'FLAVOR', 'PLANE', 'HORN', 'BEGINNER' ];

window.onload = function() {
    newTheme();
  };

function newTheme() {
    var randomnumber1 = Math.floor(Math.random() * (part1.length));
    var randomnumber2 = Math.floor(Math.random() * (part2.length));
    document.getElementById('themedisplay').innerHTML = part1[randomnumber1] + ' ' + part2[randomnumber2];
}

//Timer

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

jQuery(function ($) {
  var fiveMinutes = 60 * 5,
      display = $('#time');
  startTimer(fiveMinutes, display);
});