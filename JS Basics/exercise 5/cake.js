function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);

    let cakeVolume = cakeWidth * cakeLength;
    let startCakeVolume = cakeVolume;
    let piecesSum = 0;


    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        let takenPieces = Number(command);
        piecesSum += takenPieces;

        if (cakeVolume >= takenPieces) {
            cakeVolume -= takenPieces;
        }
        else if (cakeVolume < takenPieces) {
            console.log(`No more cake left! You need ${takenPieces - cakeVolume} pieces more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (startCakeVolume < piecesSum && command === "STOP") {
        console.log(`No more cake left! You need ${piecesSum - startCakeVolume} pieces more.`);
    } else if (startCakeVolume >= piecesSum) {
        console.log(`${cakeVolume} pieces are left.`)
    }
}