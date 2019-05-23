$(document).ready(function () {
  var numPlayer = parseInt(prompt('Quanti giocatori vuoi raffigurare? '))
  $.ajax({
    'url': 'https://www.boolean.careers/api/array/basket?n=numberPlayers',
    'method': 'GET',
    'data':{
      'n': numPlayer
    },
    'success': function (players) {
      var giocatori = schedeGiocatori(players.response, numPlayer);
      var template = Handlebars.compile($('#template').html());
      var html;
      for (var field in giocatori) {
        html = template(giocatori[field]);
        $('.container').append(html)
      }
    },
    'error': function () {
      alert('errore');
    }
  });
});

function schedeGiocatori(giocatori, n) {
  var players = [];
  for (var i = 0; i < n; i++) {
    players.push({
      "playerCode": giocatori[i].playerCode,
      "rebounds": giocatori[i].rebounds,
      "fouls": giocatori[i].fouls,
      "points": giocatori[i].points,
      "twoPoints": giocatori[i].twoPoints,
      "threePoints": giocatori[i].threePoints
    });
  }
  return players
};
