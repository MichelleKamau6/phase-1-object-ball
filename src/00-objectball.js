console.log(gameObject());
function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

function numPointsScored(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    let team = game[teamKey];
    let players = team.players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    let players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];
  for (let teamKey in game) {
    let team = game[teamKey];
    if (team.teamName === teamName) {
      for (let player in team.players) {
        numbers.push(team.players[player].number);
      }
    }
  }
  return numbers;
}

function playerStats(playerName) {
  const game = gameObject();
  for (let teamKey in game) {
    let players = game[teamKey].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;
  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].shoe > biggestShoe) {
        biggestShoe = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }
  return rebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let bestPlayer = "";
  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        bestPlayer = player;
      }
    }
  }
  return bestPlayer;
}

function winningTeam() {
  const game = gameObject();
  let scores = { home: 0, away: 0 };
  for (let teamKey in game) {
    let team = game[teamKey];
    for (let player in team.players) {
      scores[teamKey] += team.players[player].points;
    }
  }
  return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longest = "";
  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (player.length > longest.length) {
        longest = player;
      }
    }
  }
  return longest;
}

function doesLongNameStealATon() {
  const game = gameObject();
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let topStealer = "";

  for (let teamKey in game) {
    let players = game[teamKey].players;
    for (let player in players) {
      if (players[player].steals > maxSteals) {
        maxSteals = players[player].steals;
        topStealer = player;
      }
    }
  }

  return topStealer === longestName;
}
