const sequelize = require('../config/connection');
const seedGames = require('./gameidData');
const seedUsers = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedGames();
  
    await seedUsers();
  
    process.exit(0);
  };
  
  seedAll();