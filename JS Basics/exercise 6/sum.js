function sum (input){
    let index = 0;
    let command = input[index];

    let primeSum = 0;
    let nonPrimeSum = 0;

    while(command !== "stop"){
        let currentNum = Number(command);
        index++;

        if(currentNum < 0){
            console.log("Number is negative.");
        }

        if(currentNum % 2 === 0 || currentNum % 3 === 0 || currentNum % 5 === 0 || currentNum % 7 === 0 || currentNum % 11 === 0 || currentNum % 13 === 0){
            nonPrimeSum+= currentNum;
        } else{
            primeSum+= currentNum;
        }

        command=input[index];
    }

    console.log(primeSum);
    console.log(nonPrimeSum);
}

sum(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])