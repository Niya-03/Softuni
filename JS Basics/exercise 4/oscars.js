function oscars(input) {
    let actorName = input[0];
    let startPoints = Number(input[1]);
    let judgesCount = Number(input[2]);
    let inputL = input.length;

    for (let i = 3; i < inputL; i++) {
        if (i % 2 !== 0) {
            let points = i + 1;
            let total = input[i].length * Number(input[points]) / 2;
            startPoints += total;
        }

        if (startPoints > 1250.5) {
            break;
        }
    }

    if (startPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startPoints).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startPoints).toFixed(1)}!`);
    }
}