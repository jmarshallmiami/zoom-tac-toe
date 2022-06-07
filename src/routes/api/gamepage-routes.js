// const router = require("express").Router();
// const { GameId } = require("../../models");

// // //create unique gameID when you create a game 
// const {v4: uuidv4} = require('uuid');

// // creates URL to unique game ID
// router.get("/game", (req, res) => { 
//   try {
//     res.redirect(`/${uuidv4()}`)
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/:game", (req, res) => {
//   try {
//     res.render("games", {
//       style: "game.css",
//       gameId: req.params.id
//     })
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// module.exports = router;
