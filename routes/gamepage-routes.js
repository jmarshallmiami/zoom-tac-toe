const express = require("express");
const router = express.Router();

router.get("/game", (req, res) => {
  try {
    res.render("games", {
      style: "game.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
