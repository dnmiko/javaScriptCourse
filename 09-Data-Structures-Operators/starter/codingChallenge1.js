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
    //console.log(player);
  });

  //console.log(`Total of goals scored: ${playersNames.length}`);
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

//Loop through an array printing something
const goalInfo = [...game.scored.entries()];
for (const [index, player] of goalInfo) {
  //console.log(`Goal ${index + 1}: ${player}`);
}

//Loop through an object to calculate a value
const oddValues = [...Object.values(game.odds)];
let sum = 0;

for (const odd of oddValues) {
  sum += odd;
}

let avgOdd = sum / oddValues.length;
//console.log(avgOdd);

//Loop through both an array and an Object
const odds = [...Object.entries(game.odds)];

for (const [index, odd] of odds) {
  let victoryStr = `Odd of victory ${game[index] ?? `draw`}: ${odd}`;
  //console.log(victoryStr);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, 'Substitution'],
  [47, '⚽ GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, 'Yellow card'],
]);

//Create an array without duplicates from a map
const auxiliarSet = new Set(gameEvents.values());

const uniqueEvents = [...auxiliarSet];
//console.log(uniqueEvents);

gameEvents.delete(64);
//console.log(gameEvents);

console.log(
  `An event happended, on average, every ${90 / gameEvents.size} minutes`
);

for (const [minute, event] of gameEvents) {
  console.log(
    `[${minute < 45 ? 'First half' : 'Second half'}] ${minute}: ${event}`
  );
}
