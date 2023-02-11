function arraysAdvanced(nums, commands) {
    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(" ");
        let currentCommand = currentValues.shift();

        currentValues = currentValues.map(Number);
        let sumPairs = 0;
        let pairsOfSums = [];

        switch (currentCommand) {
            case "add":
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, elementToAdd);
                break;
            case "addMany":
                let indexToAddMany = currentValues.shift();
                nums.splice(indexToAddMany, 0, [...currentValues]);
                break;
            case "contains":
                console.log(nums.indexOf(currentValues[0]));
                break;
            case "remove":
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove, 1);
                break;
            case "shift":
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
            case "sumPairs":
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                for (let i = 0; i < nums.length; i += 2) {
                    sumPairs = nums[i] + nums[i + 1];
                    pairsOfSums.push(sumPairs);
                }
                nums = [...pairsOfSums];
                break;
            case "print":
                console.log(`[ ${nums.join(", ")} ]`);
                break;

        }
    }
}