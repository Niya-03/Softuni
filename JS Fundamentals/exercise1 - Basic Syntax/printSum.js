function printSum(firstNum, secondNum){
    let sum = 0;
    let string = "";

    for(let i = firstNum; i <= secondNum; i ++){

        string = string + i + " ";
        sum+=i;      
    }

    console.log(string);
    console.log(`Sum: ${sum}`)
        
}