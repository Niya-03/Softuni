function heroicInventory(arr) {
    let result = [];

    while (arr.length > 0) {
        let hero = {};
        let tokens = arr.shift().split(" / ");
        hero.name = tokens[0];
        hero.level = Number(tokens[1]);

        if(tokens[2] != undefined){
            hero.items = tokens[2].split(", ");
        }else{
            hero.items = [];
        }
        
        result.push(hero);
    }

    let json = JSON.stringify(result);
    console.log(json)
}

heroicInventory(['Isacc / 25',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara']);