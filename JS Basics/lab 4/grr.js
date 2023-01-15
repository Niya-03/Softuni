/*function num(input){
 let n = Number(input[0]);
    
for (i = 0; i <= n; i+=2){
    let res = Math.pow(2, i);
    console.log(res);
}

}

num([4])

function char(input){
    let text = input[0];

    for(let i = 0; i < text.length; i++){
        console.log(text.charAt(i));
    }
}

char(["softuni"])

function vowelsSum (input){
    let text = input[0];
    let sum = 0;

    for(let i = 0; i< text.length ; i++){
        let ch = text.charAt(i);
        switch(ch){
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }
    console.log(sum)
}

vowelsSum(["hello"])

function sumNum(input) {
    let numberText = input[0];
    let sum = 0;

    for (let i = 0; i < numberText.length; i++) {
        let n = Number(numberText.charAt(i));
        sum = sum + n;
    }

    console.log(`The sum of the digits is:${sum}`)
}

sumNum(["1234"])*/

function division9(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let printNumber = "";

    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            printNumber = printNumber + `${i}\n`;
        }
    }
    console.log("The sum: " + sum);
    console.log(printNumber)
}

division9(["100", "200"])