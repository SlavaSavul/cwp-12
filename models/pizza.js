module.exports = (Sequelize, sequelize) => {
    return sequelize.define('pizzas', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING(500),
        description: Sequelize.STRING(1000),
        calories: Sequelize.DOUBLE
    });
};