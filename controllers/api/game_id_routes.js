const router = require("express").Router();
const { User, GameId } = require("../../models");
// // creates get all games
// router.get("/game", (req, res) => {
//   GameId.findAll()
//     .then(dbGameData => res.json(dbGameData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     })
// });


// router.get("/:gameId", (req, res) => {
//   GameId.findOne({

//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbGameData => {
//       if (!dbGameData) {
//         res.status(404).json({ message: 'Game ID not found!' });
//         return;
//       }
//       res.json(dbGameData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// POST /newGame
router.post('/newGame', (req, res) => {
  GameId.create({
    // expects gameId: "<generated UUID>", player1_id: "<username of player1>", player2_id: "<username of player2>", player1_turn: "<Boolean>"
    gameId: req.body.gameId,
    player1_id: req.body.player1_id,
    player2_id: req.body.player2_id,
    player1_turn: req.body.player1_turn
  }).then((gameObj) => {
    if (Math.round(Math.random()) === 0) {
      gameObj.player1_turn = false
    }
    console.log(gameObj.toJSON());
    return gameObj;
  }).catch((err) => {
    console.log("These was an error");
    console.log(err);
  })
});


// PUT /api/users/1
router.put('/:gameId', (req, res) => {
  // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
  GameId.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbGameData => {
      if (!dbGameData[0]) {
        res.status(404).json({ message: 'Game ID not found!' });
        return;
      }
      res.json(dbGameData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;
