const Sequelize = require('sequelize');
const config = require('./config.json');

const db = require('./models')(Sequelize, config);


startFunc();

async function startFunc() {
    await require('./insert')(db);



    console.log('[--- 1 ---]');
    let result = await db.turtles.findAll();
    result.forEach((value) => {
        console.log(value.name);
    });

    console.log('[--- 2 ---]');
    result = await db.turtles.findAll({
        where: {
            '$firstFavouritePizza.name$': "Mozzarella"
        },
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    result.forEach((value) => {
        console.log(value.name);
    });

    console.log('[--- 3 ---]');
    result = await db.turtles.findAll({
        group: 'firstFavouritePizzaId',
        include: [{
            model: db.pizzas,
            as: 'firstFavouritePizza'
        }]
    });
    result.forEach((turtle) => {
        console.log(JSON.stringify(turtle));
    });

    console.log('[--- 4 ---]');
    result = await db.turtles.create({
        name: 'Andre',
        color: 'color',
        weaponId: 1,
        firstFavouritePizzaId: 1,
        secondFavouritePizzaId: 2
    });

    console.log('[--- 5 ---]');
    result =await db.pizzas.findAll({
        where : {
            calories: {[db.Sequelize.Op.gt]: '3000'} // >
        }
    });
    result.forEach((value) => {

         db.pizzas.update({
                description: `${value.description} SUPER FAT!`
            },
            {
                where: {
                    id: value.id
                }
            });

    });

    result = await db.pizzas.findAll();
    result.forEach((value) => {
        console.log(`${value.name} : ${value.description}`);
    });


    console.log('[--- 6 ---]');
    result = await db.turtles.count({
        where: {
            '$weapon.dps$': {[db.Sequelize.Op.gt]: '100'}
        },
        include: [{
            model: db.weapons,
            as: 'weapon'
        }]
    });
    console.log(result);

    console.log('[--- 7 ---]');
    result = await db.pizzas.findById(1);
    console.log(result.name);

    console.log('[--- 8 ---]');
    result = await db.turtles.update({
        firstFavouritePizzaId: 4
    },
    {
        where: {
            name: 'Andre'
        }
    });
    result = await db.turtles.findAll();
    result.forEach((value) => {
        console.log(`${value.name} : ${value.firstFavouritePizzaId}`);
    });
}