function traveling(input) {
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destination = command;
        index++;

        let tempSum = Number(input[index]);
        index++;

        let budget = 0;
        let currentMoney = Number(input[index]);

        while (tempSum > budget) {
            budget += currentMoney;

            if (budget >= tempSum) {
                console.log(`Going to ${destination}!`);
                break;
            }

            index++;
            currentMoney = Number(input[index]);
        }

        index++;
        command = input[index];
    }
}