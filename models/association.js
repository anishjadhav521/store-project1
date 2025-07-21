const Store = require('./store');
const Rating = require('./rating');

Store.hasMany(Rating, { foreignKey: 'storeId' });
Rating.belongsTo(Store, { foreignKey: 'storeId' });

module.exports = { Store, Rating };
