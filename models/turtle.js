module.exports = (Sequelize, sequelize) => {
    return sequelize.define('turtles', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING(500),
        color: Sequelize.STRING(500),
        weaponId: Sequelize.INTEGER,
        firstFavoritePizzaId: Sequelize.INTEGER,
        secondFavoritePizzaId: Sequelize.INTEGER
    });
};