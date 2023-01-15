function sumNum(input) {
    let numberText = input[0];
    let sum = 0;

    for (let i = 0; i < numberText.length; i++) {
        let n = Number(numberText.charAt(i));
        sum = sum + n;
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumNum(["1234"])