function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let houseVolume = width * length * height;

    let boxVolumeSum = 0;

    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        let boxVolume = Number(command);
        boxVolumeSum += boxVolume;

        if (boxVolumeSum > houseVolume) {
            console.log(`No more free space! You need ${boxVolumeSum - houseVolume} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (boxVolumeSum > houseVolume && command === "Done") {
        console.log(`No more free space! You need ${boxVolumeSum - houseVolume} Cubic meters more.`);
    } else if (houseVolume > boxVolumeSum) {
        console.log(`${houseVolume - boxVolumeSum} Cubic meters left.`);
    }
}