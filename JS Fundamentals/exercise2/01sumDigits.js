function sumDigits(num){
    let number = String(num);
    let sum = 0;

    for(let i = 0; i < number.length; i++){
        let digit = Number(number[i]);
        sum+= digit;
    }

    console.log(sum);
}

sumDigits(97561)