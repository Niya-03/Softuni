function perfectNumber (num){
    let sum = 0;

    for(let i = 1; i < num; i++){
        let currentDivisor = i;

        if(num % i === 0){
            sum+=currentDivisor;
        }
    }

    if(sum === num){
        return "We have a perfect number!";
    } else{
        return "It's not so perfect.";
    }
}

console.log(perfectNumber(1236498))