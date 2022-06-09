const router = require("express").Router();
const { User, GameId } = require("../../models");

// creates get all games
router.get("/game", (req, res) => {
  GameId.findAll({
    attributes: ["player1_id"],
    where: {
      player1_id: username,
    },
  })
    .then((dbGameData) => res.json(dbGameData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create gameroomName
router.post("/", ({ body, session }, res) => {
  GameId.create(body).then((dbGameData) => {
    session.save(() => {
      session.gameroomName = dbGameData.gameroomName;
      res.json(dbGameData);
    });
  });
});

module.exports = router;
