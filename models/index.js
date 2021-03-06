const Turtle = require('./turtle');
const Weapon = require('./weapon');
const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {
    const sequelize = new Sequelize(config.db, config.login, config.password, {
        host: config.host,
        dialect: config.dialect,
        logging: false
    });

    sequelize.authenticate()
    .then(() => {
        console.log('Connection to database successful');
    })
    .catch((err) => {
            console.log('Unable to connect to database', err);
    });
    const turtles = Turtle(Sequelize, sequelize);
    const weapons = Weapon(Sequelize, sequelize);
    const pizzas = Pizza(Sequelize, sequelize);

    turtles.belongsTo(pizzas, {foreignKey: 'firstFavouritePizzaId', as: 'firstFavouritePizza'});
    turtles.belongsTo(pizzas, {foreignKey: 'secondFavouritePizzaId', as: 'secondFavouritePizza'});
    turtles.belongsTo(weapons, {foreignKey: 'weaponId', as: 'weapon'});

    return {
      turtles,
      weapons,
      pizzas,

      sequelize: sequelize,
      Sequelize: Sequelize,
    };
};