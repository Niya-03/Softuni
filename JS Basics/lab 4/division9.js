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