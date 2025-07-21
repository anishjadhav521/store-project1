// test.js
const sequelize = require('./config/db');
console.log('✅ Loaded Sequelize instance:', typeof sequelize.sync === 'function');
