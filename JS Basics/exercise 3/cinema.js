function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let sum = 0;

    switch (type) {
        case "Premiere": sum = rows * columns * 12; break;
        case "Normal": sum = rows * columns * 7.50; break;
        case "Discount": sum = rows * columns * 5; break;
    }

    console.log(`${sum.toFixed(2)} leva`);
}