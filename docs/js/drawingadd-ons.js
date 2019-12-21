var part1 = ['DANCING', 'FLYING', 'CYBER', 'MAGICAL', 'SHINING', 'STRAY'];
var part2 = ['KNIGHT', 'FAIRY', 'PAN', 'ARM', 'CAT', ];

window.onload = function() {
    newTheme();
  };

function newTheme() {
    var randomnumber1 = Math.floor(Math.random() * (part1.length));
    var randomnumber2 = Math.floor(Math.random() * (part2.length));
    document.getElementById('themedisplay').innerHTML = part1[randomnumber1] + ' ' + part2[randomnumber2];
}