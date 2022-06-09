const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'jimbob',
        password: 'jim',
      },
    {
        id: 2,
        username: 'joebob',
        password: 'joe',
      },
    {
        id: 3,
        username: 'janebob',
        password: 'jane',
      }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;