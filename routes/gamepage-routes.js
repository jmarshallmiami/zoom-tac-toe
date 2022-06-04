const express = require("express");
const router = express.Router();
// //create unique gameID when you create a game 
const {v4: uuidv4} = require('uuid');

// app.get('/', (req, res) => {
//     res.render(`/${uuidv4()}`);
// });

// app.get('/:game', (req,res) => {
//   res.redirect('game', {gameId: req.params.game})
// });

router.get("/game", (req, res) => {
  try {
    res.render(`games/${uuidv4()}`, {
      style: "game.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
