function birthday(input) {
    let lilisAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= lilisAge; i++) {

        if (i % 2 === 0) {
            savedMoney+= addedMoney;
            stolenMoney++;
            addedMoney += 10;
        } else {
            toysCounter++;
        }
    }

    let allToysPrice = toysCounter * toyPrice;
    let totalMoney = (allToysPrice + savedMoney) - stolenMoney;

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}

birthday(["21","1570.98","3"])
