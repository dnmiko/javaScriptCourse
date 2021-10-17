'use strict';

//Input info from a service
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 3.25,
    x: 6.5,
    team2: 1.33,
  },
};

//Arrays with each team players
const playersBayern = [...game.players[0]];
const playersBorrussia = [...game.players[1]];

//Variable with goal keeper and the rest are the fieldPlayers
const [gkBayern, ...fieldPlayersBayern] = playersBayern;
const [gkBorrussia, ...fieldPlayersBorrussia] = playersBorrussia;

//Merge two different arrays
const allPlayers = [...playersBayern, ...playersBorrussia];

//Using a previous array, add values
const finalPlayersBayern = [...playersBayern, 'Thiago', 'Coutinho', 'Perisic'];

//Destructure variables from array and renaming
const { team1, x: draw, team2 } = game.odds;

//Use the rest parameters to receive an arbitrary number of parameters
const printGoals = function (...playersNames) {
  playersNames.forEach(player => {
    console.log(player);
  });

  console.log(`Total of goals scored: ${playersNames.length}`);
};
//printGoals(...game.scored);

//Using short circuiting, to define which team is more likely to win
const likelyWin =
  (team1 < team2 &&
    team1 < draw &&
    console.log('Team1 is more likely to win')) ||
  (team2 < team1 &&
    team2 < draw &&
    console.log('Team2 is more likely to win')) ||
  (draw < team1 &&
    draw < team2 &&
    console.log('The draw is more likely to happen'));
