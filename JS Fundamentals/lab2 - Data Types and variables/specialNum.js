function specialNumbers (num){

    for(let i = 1; i <= num; i++){
        let currentNumber = String(i);
        let sum = 0;

        for(let j = 0; j < currentNumber.length; j++){
            let digit = currentNumber[j];
            digit = Number(digit);
            sum+=digit;
        }

        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${currentNumber} -> True`);
        }else{
            console.log(`${currentNumber} -> False`);
        }
    }
}

specialNumbers(20)