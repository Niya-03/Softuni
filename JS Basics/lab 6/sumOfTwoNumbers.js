function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let numberOne = 0;
    let numberTwo = 0;
    let isFound = false;

    for (let a = startNumber; a <= endNumber; a++) {

        for (let b = startNumber; b <= endNumber; b++) {

            combinations++
            numberOne = a;
            numberTwo = b;

            if (a + b === magicNumber) {
                isFound = true;
                break;
            }
        }

        if (isFound) {
            break;
        }
    }

    if (isFound) {
        console.log(`Combination N:${combinations} (${numberOne} + ${numberTwo} = ${magicNumber})`);

    } else {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}