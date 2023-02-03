function charactersInRange(char1, char2) {

    let num1 = char1.charCodeAt(0);
    let num2 = char2.charCodeAt(0);

    let firstNum = 0;
    let secondNum = 0;

    if (num1 < num2) {
        firstNum = num1;
        secondNum = num2;
    } else {
        firstNum = num2;
        secondNum = num1;
    }

    let arr = [];

    for (i = firstNum + 1; i < secondNum; i++) {
        let currentChar = String.fromCharCode(i);
        arr.push(currentChar);
    }

    return arr.join(" ");
}

console.log(charactersInRange('#', ':'))