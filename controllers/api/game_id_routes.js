const router = require("express").Router();
const { User, Game } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Game.findAll({
    attributes: ["game_id"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:game_id", (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["game_id"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No game found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Game.create({
    game_id: req.body.game_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:game_id", withAuth, (req, res) => {
  Game.update(
    {
      game_id: req.body.game_id,
    },
    {
      where: {
        game_id: req.params.game_id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No gameroom with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
