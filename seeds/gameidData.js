const { GameId } = require('../models');

const gameidData = [
    {
        gameId: iewjroi13,
        player1_id: julian1,
        player2_id: jess1,
        player1_turn: true
      },
      {
        gameId: iewjroi23,
        player1_id: julian2,
        player2_id: jess2,
        player1_turn: true
      },
      {
        gameId: iewjroi33,
        player1_id: julian3,
        player2_id: jess3,
        player1_turn: true
      },
      {
        gameId: iewjroi43,
        player1_id: julian4,
        player2_id: jess4,
        player1_turn: true
      },
];

const seedGames = () => GameId.bulkcreate(gameidData);

module.exports = seedGames;