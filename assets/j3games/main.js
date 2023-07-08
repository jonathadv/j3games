const gameHelp = [
  {
    name: "Alloy",
    commands: [
      { action: "Mover o personagem", key: "Teclas de Direção" },
      { action: "Pular", key: "A" },
      { action: "Atirar", key: "S" },
      { action: "Golpear", key: "D" },
    ]
  },
];

function loadGames() {
  {
    var gameNames = [
      "Alloy",
      "ATV Extreme",
      "Americas Army",
      "Batman",
      "Beer Monster",
      "Beetle Buggin",
      "Bike Mania",
      "bilhar",
      "Bomberman",
      "bomb jack",
      "Bowman",
      "Cable Capers",
      "Car Park Challenge",
      "Crossing Cup",
      "Dogfight - The Great War",
      "Donkey Kong Bananas",
      "Dragon Ball Z",
      "Dress Up",
      "Elite Forces",
      "Galan, the Armadillo Knigth",
      "Gmax Skate",
      "Goku Paint",
      "gold miner2",
      "gold miner",
      "Gyro Ball",
      "helicopter",
      "Hit The Jackpot",
      "Hunga Hatch",
      "IQ Marathon",
      "Mario Jet",
      "Metal Slug",
      "Mini Golf",
      "moon lander",
      "N2O Rush",
      "pacman",
      "panik",
      "penguin_baseball",
      "pipes",
      "polar rescue",
      "Red Beard",
      "rooftop skate",
      "Scooby Doo Castelo Fantasma",
      "Scooby Doo fugindo do Fantasma",
      "Shackle-Man",
      "Sheepish",
      "Shove It",
      "sonic",
      "Steppenwolf",
      "Street Fighter",
      "Stunt Mania",
      "Suckaz",
      "super mario flash 2.0",
      "supreme extreme snowboarding",
      "surfs up",
      "Through The Machine",
      "Tube Racer",
      "Tuning",
      "uphill rush",
      "vanguard mercenary",
      "zombie-terror",
    ];


    var leftList = ['<div class="col-md-5"><div class="container">\n'];
    var centerList = ['<div class="col-md-1"><div class="container"><p class="container"></p></div></div>\n'];
    var rightList = ['<div class="col-md-5"><div class="container">\n'];

    for (var i = 0; i < gameNames.length; i++) {
      var gameName = gameNames[i];
      var imageSrc = `jogos/${gameName}.gif`;
      var swfLink = `jogos/${gameName}.swf`;

      if (i % 2 === 0) {
        leftList.push(`<p class="container"><img src="${imageSrc}"><a href="${swfLink}"><span class="gameName">${gameName}</span></a></p>\n`);
      } else {
        rightList.push(`<p class="container"><img src="${imageSrc}"><a href="${swfLink}"><span class="gameName">${gameName}</span></a></p>\n`);
      }
    }
    leftList.push("</div></div>\n")
    rightList.push("</div></div>\n")
    var html = leftList.concat(centerList).concat(rightList);

    $('#gameList').append(html.join(""));
  }
}

function loadHeader() {
  $('#header').load('partial/header.html');

  var imgSrc = $('#title').attr('imgSrc');
  var imgStyle = $('#title').attr('imgStyle');

  $('#title').load('partial/title.html', function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") {
      if (imgSrc) {
        $('#titleImg').attr('src', imgSrc);
      }

      if (imgStyle) {
        $('#titleImg').attr('style', imgStyle);
      }
    }
  });


}

function loadFooter() {
  $('#footer').load('partial/footer.html');
}

function loadBackButton() {
  $('#backButton').load('partial/backButton.html');
}

function loadGameHelp() {
  var html = [];

  gameHelp.forEach(item => {
    html.push("<div>\n");
    html.push(`
    <h5 name="${item.name}" id="${item.name}">
      <a name="${item.name}" id="${item.name}">${item.name}</a>
    </h5>\n`);

    item.commands.forEach(cmd => {
      html.push(`<p class="noSpaceLine">${cmd.action}: <b>${cmd.key}</b></p>\n`);
    });
    html.push("</div>\n")
    html.push('<p align="center"><a href="#controles-de-jogos"><font size="5" face="arial" color="red">Voltar</font></a></p>')

  });

  $('#gameHelp').append(html.join(""));
}

$(document).ready(function () {
  loadHeader()
  loadFooter()
  loadBackButton()
  loadGames()
  loadGameHelp()
});
