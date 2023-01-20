function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let timesShieldBroken = 0;
    let timesHelmetBroken = 0;
    let timesSwordBroken = 0;
    let timesArmourBroken = 0;
    let currentShieldBroken = 0;

    for(let i = 1; i <= lostFights; i++){
        let currentFight = i;
       
        if(currentFight%2 === 0 && currentFight % 3 === 0){
            timesHelmetBroken+=1
            timesSwordBroken+=1;
            timesShieldBroken+=1;
            currentShieldBroken+=1;

        } else if(currentFight%2 === 0){
            timesHelmetBroken+=1;

        } else if(currentFight % 3 === 0){
            timesSwordBroken+= 1;
        }

        if(currentShieldBroken%2 ===0 && currentShieldBroken !== 0){
            timesArmourBroken+=1;
        }

        if(currentShieldBroken === 2){
            currentShieldBroken = 0;
        }
    }

    let shieldExpense = timesShieldBroken * shieldPrice;
    let helmetExpense = timesHelmetBroken * helmetPrice;
    let swordExpense = timesSwordBroken * swordPrice;
    let armourExpense = timesArmourBroken * armorPrice;

    let sumExpense = shieldExpense + helmetExpense + swordExpense + armourExpense;
    console.log(`Gladiator expenses: ${sumExpense.toFixed(2)} aureus`);
    
}

gladiator(23,
    12.50,
    21.50,
    40,
    200
    
    )