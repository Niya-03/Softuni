function salary(input) {
    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    let globa = 0;
    let inputL = input.length;

    for (let i = 2; i <= inputL; i++) {

        let tabName = input[i];

        switch (tabName) {
            case "Facebook": globa += 150; break;
            case "Instagram": globa += 100; break;
            case "Reddit": globa += 50; break;
            default: salary - 0; break;
        }
    }

    if (globa >= salary) {
        console.log("You have lost your salary.");
    } else {
        console.log((salary - globa).toFixed(0));
    }
}

salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])