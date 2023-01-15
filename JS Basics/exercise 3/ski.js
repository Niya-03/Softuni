function ski(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let sum = 0;

    switch (roomType) {
        case "room for one person": sum = nights * 18; break;
        case "apartment": sum = nights * 25;
            if (nights < 10) {
                sum = sum * 0.7;
            } else if (nights <= 15) {
                sum = sum * 0.65;
            } else if (nights > 15) {
                sum = sum * 0.50;
            } break;
        case "president apartment": sum = nights * 35;
            if (nights < 10) {
                sum = sum * 0.9;
            } else if (nights <= 15) {
                sum = sum * 0.85;
            } else if (nights > 15) {
                sum = sum * 0.80;
            } break;
    }

    if (feedback === "positive") {
        sum = sum * 1.25;
    } else if (feedback === "negative") {
        sum = sum * 0.90;
    }

    console.log(sum.toFixed(2));
}