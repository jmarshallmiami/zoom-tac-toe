const router = require("express").Router();
const { User } = require("../../models");

router.post("/", ({ body, session }, res) => {
  User.create(body).then((dbUserData) => {
    session.save(() => {
      session.user_id = dbUserData.id;
      session.username = dbUserData.username;
      session.loggedIn = true;

      res.json(dbUserData);
    });
    User.id = dbUserData.id;
    User.username = dbUserData.username;
  });
});

router.get("/login", (req, res) => {
  User.findOne({
    where: {
      id: req.body.id,
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that username!" });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }
    res.json({ user: dbUserData, message: "You are now logged in!" });

    // req.session.save(() => {
    //   req.session.user_id = dbUserData.id;
    //   req.session.username = dbUserData.username;
    //   req.session.loggedIn = true;
    // });

  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
