const express = require("express");

const app = express();
const server = require("http").Server(app);
// const io = require('socket.io')(server);

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static("public"));

const homepageRouter = require("./routes/homepage-routes");
app.use("/", homepageRouter);

const gamepageRouter = require("./routes/gamepage-routes");
app.use("", gamepageRouter);

// io.on("connection", socket => {
//     socket.on('join-room', (gameId) => {
//       // console.log('Player has joined room');
//       socket.join(gameId);
//       socket.to(gameId).broadcast.emit('user-connected');
//     })
//   });

server.listen(3100);
