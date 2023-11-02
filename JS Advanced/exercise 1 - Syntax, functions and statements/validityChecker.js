function validityChecker(x1, y1, x2, y2) {
    let distance1 = 0
    let distance2 = 0;
    let distance3 = 0;

    distance1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    distance2 = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2);
    distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(2, 1, 1, 1)