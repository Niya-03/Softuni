function dayOfWeek(number) {

    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (number < 1 || number > 7) {
        console.log("Invalid day!");
    } else {
        console.log(daysOfWeek[number - 1]);
    }

}

dayOfWeek(3)