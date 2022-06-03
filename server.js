const express = require('express');
const { isBuffer } = require('util');
const app = express();
const server = require('http').Server(app);

// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});

const {v4: uuidv4} = require('uuid');

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// test for server functionality

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

// app.get('/', (req,res) => {
//     res.status(200).send("Server is working")
// });

app.get('/:game', (req,res) => {
    res.render('game', {gameId: req.params.game})
})


server.listen(3100);