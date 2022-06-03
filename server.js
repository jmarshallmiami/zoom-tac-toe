const express = require("express");

const app = express();
const server = require("http").Server(app);

// const {v4: uuidv4} = require('uuid');

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

const homepageRouter = require("./routes/homepage-routes");
app.use("/", homepageRouter);

const gamepageRouter = require("./routes/gamepage-routes");
app.use("", gamepageRouter);

// app.get('/', (req, res) => {
//     res.redirect(`/${uuidv4()}`);
// });

// app.get('/:game', (req,res) => {
//     res.redirect('game', {gameId: req.params.game})
// });

server.listen(3100);
