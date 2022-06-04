const express = require("express");
const app = express();
const router = express.Router();
// //create unique gameID when you create a game 
const {v4: uuidv4} = require('uuid');
// console.log({gameId: req.params.game});



router.get("/game", (req, res) => {
  
  
  try {
    res.redirect(`/${uuidv4()}`)
  } catch (err) {
    res.status(500).json(err);
  }
  
  // try {
  //   res.render("games", {
  //     style: "game.css"
  //   })
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});
router.get("/:game", (req, res) => {
  try {
    res.render("games", {
      style: "game.css",
      gameId: req.params.game
    })
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
