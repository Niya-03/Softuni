function train(arr) {
    let wagons = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = wagons[j];

                if (currentWagon + Number(command[0]) <= maxCapacity) {
                    wagons[j] += Number(command[0]); break;
                }
            }
        }
    }
    return wagons.join(" ");
}

console.log(train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']))