// connection to db config
const sequelizer = require('./config/connection');

// initialize express
const express = require('express');
const exphbs = require('express-handlebars');
const { sequelize } = require('./models');
const hbs = exphbs.create({});
const app = express();

// server port connection
const port = process.env.PORT || 3001

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// initalizing server
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

// initialize handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// use the routes set up in the routes folder
const routes = require('./src/routes');


// io.on('connection', socket => {
//     socket.on('join-room', (gameId) => {
//       // console.log('Player has joined room');
//       socket.join(gameId);
//       socket.to(gameId).broadcast.emit('user-connected');
//     })
//   });

// turn on connection to db and server
sequelizer.sync({ force: false }).then(() => {
    app.listen(port, () => console.log('Now listening'));
})