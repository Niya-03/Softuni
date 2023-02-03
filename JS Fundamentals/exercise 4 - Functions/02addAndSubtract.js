function addAndSubtract(num1, num2, num3){
    let sumOfTwoNums = (num1, num2) => num1 + num2;
    let sum = sumOfTwoNums(num1, num2);

    let subtractOfTwoNums = (sum, num3) => sum - num3;
    let subtract = subtractOfTwoNums(sum, num3);
     
    return subtract;
}

console.log(addAndSubtract(23,
    6,
    10
    ))