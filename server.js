const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// initialize socket.io
const server = app.listen(PORT, () => console.log("Now listening"));
const socket = require('socket.io')
const io = socket(server)

// initialize sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");
// const { io } = require("socket.io-client");

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(require("./controllers"));

io.sockets.on('connection', (socket) => {
  console.log('Player has joined room');
});

// sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log("Now listening"));
// });
