// initialize express
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();

// server port connection
const port = process.env.PORT||3001

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

// initalizing server
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));

// initialize handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// const homepageRouter = require('./routes/homepage-routes');
// app.use('/', homepageRouter);

// const gamepageRouter = require('./routes/gamepage-routes');
// app.use('', gamepageRouter);

// io.on('connection', socket => {
//     socket.on('join-room', (gameId) => {
//       // console.log('Player has joined room');
//       socket.join(gameId);
//       socket.to(gameId).broadcast.emit('user-connected');
//     })
//   });

app.listen(port, ()=> {
    console.log(`The server is listening on port ${port}`);
});
