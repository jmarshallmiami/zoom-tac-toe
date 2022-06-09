const path = require("path");
const express = require("express");
const http = require('http');
const session = require("express-session");
const exphbs = require("express-handlebars");

// initialize sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const server = http.createServer(app);


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

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./controllers"));

const PORT = process.env.PORT || 3001;
// set static folder
app.use(express.static(path.join(__dirname, "public")));


sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => console.log(`Server now listening ${PORT}`));
}).catch((err) =>{
  console.log(err);
});