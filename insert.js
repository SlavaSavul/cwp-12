module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all([
        db.pizzas.create({
            name: 'Mozzarella',
            description: 'description mozzarella',
            calories: 265.00
        }),
        db.pizzas.create({
            name: 'Marinara',
            description: 'description marinara',
            calories: 247.00
        }),
        db.pizzas.create({
            name: 'Capricciosa',
            description: 'description capricciosa',
            calories: 3001.85
        }),
        db.pizzas.create({
            name: 'Focaccia',
            description: 'description focaccia',
            calories: 4000.00
        }),
        db.weapons.create({
            name: 'Two katanas',
            dps: 156,
            ownerId: 1
        }),
        db.weapons.create({
            name: 'bo-staff',
            dps: 90,
            ownerId: 3
        }),
        db.weapons.create({
            name: 'sais',
            dps: 120,
            ownerId: 2
        }),
        db.weapons.create({
            name: 'nunchucks',
            dps: 140,
            ownerId: 4
        }),
        db.turtles.create({
            name: 'Leonardo',
            color: 'blue',
            weaponId: 1,
            firstFavouritePizzaId: 1,
            secondFavouritePizzaId: 2
        }),
        db.turtles.create({
            name: 'Raphael',
            color: 'red',
            weaponId: 2,
            firstFavouritePizzaId: 2,
            secondFavouritePizzaId: 4
        }),
        db.turtles.create({
            name: 'Donatello',
            color: 'purple',
            weaponId: 3,
            firstFavouritePizzaId: 3,
            secondFavouritePizzaId: 1
        }),
        db.turtles.create({
            name: 'Michelangelo',
            color: 'orange',
            weaponId: 4,
            firstFavouritePizzaId: 4,
            secondFavouritePizzaId: 3
        })
    ]);
};