const router = require('express').Router();

const gameRoutes = require('./gamepage-routes');

router.use('/games', gameRoutes);

module.exports = router;