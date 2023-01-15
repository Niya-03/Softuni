function coins (input){
    let change = Number(input[0]);
    let coinsCount = 0;
    let inCoins = Math.floor(change * 100);

    while(inCoins > 0){

        if(inCoins >= 200){
            coinsCount++;
            inCoins -= 200;
        } else if(inCoins >= 100){
            coinsCount++;
            inCoins -= 100;
        } else if(inCoins >= 50){
            coinsCount++;
            inCoins -= 50;
        } else if(inCoins >= 20){
            coinsCount++;
            inCoins -= 20;
        } else if(inCoins >= 10){
            coinsCount++
            inCoins -= 10;
        } else if(inCoins >= 5){
            coinsCount++;
            inCoins -= 5;
        } else if(inCoins >= 2){
            coinsCount++;
            inCoins -= 2;
        } else if(inCoins >= 1){
            coinsCount++;
            inCoins -=1;
        }
    }

    console.log(coinsCount);
}

coins(["2.73"])