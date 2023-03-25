function heroesOfCode(input) {
    let numOfHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numOfHeroes; i++) {
        let heroData = input.shift().split(" ");
        let name = heroData[0];
        let hp = Number(heroData[1]);
        let mp = Number(heroData[2]);

        heroes[name] = {
            "hp": hp,
            "mp": mp,
        };
    }

    while (input[0] != "End") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let hero = heroes[name];

        if (command == "CastSpell") {

            if (hero.mp >= p1) {
                hero.mp -= p1;
                console.log(`${name} has successfully cast ${p2} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }

        } else if (command == "TakeDamage") {

            hero.hp -= p1;

            if (hero.hp <= 0) {
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`);
            } else {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`);
            }

        } else if (command == "Recharge") {

            if (hero.mp + p1 >= 200) {
                console.log(`${name} recharged for ${200 - hero.mp} MP!`);
                hero.mp = 200;
            } else {
                hero.mp += p1;
                console.log(`${name} recharged for ${p1} MP!`);
            }

        } else if (command == "Heal") {

            if (hero.hp + p1 >= 100) {
                console.log(`${name} healed for ${100 - hero.hp} HP!`);
                hero.hp = 100;
            } else {
                console.log(`${name} healed for ${p1} HP!`);
                hero.hp += p1;
            }
        }
    }

    for (let hero in heroes) {
        console.log(hero);
        console.log(`  HP: ${heroes[hero].hp}`);
        console.log(`  MP: ${heroes[hero].mp}`);
    }
}

heroesOfCode(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
])