function oddAndSum(num){

    let evenSum = 0;
    let oddSum = 0;

    let str = String(num);

    for(i = 0; i < str.length; i++){
        let currentNum = Number(str[i]);

        if(currentNum % 2 === 0){
            evenSum += currentNum;
        } else{
            oddSum += currentNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;

}

console.log(oddAndSum(1000435))