function steps(input) {
    let index = 0;
    command = input[index];
    let stepsSum = 0;
    let target = 10000;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsSum += steps;

        if (stepsSum >= target) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - target} steps over the goal!`);
            break;
        }

        index++;
        command = input[index];
    }

    let stepsToHome = Number(input[index + 1]);
    stepsSum = stepsSum + stepsToHome;

    if (stepsSum >= target) {
        console.log("Goal reached! Good job!");
        console.log(`${stepsSum - target} steps over the goal!`);
    } else if (stepsSum < target) {
        console.log(`${target - stepsSum} more steps to reach goal.`);
    }
}