const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("homepage", {
      style: "index.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
