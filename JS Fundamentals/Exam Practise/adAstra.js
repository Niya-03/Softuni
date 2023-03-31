function adAstra(input) {

    if(input.length < 1){
        return "You have food to last you for: 0 days";
    }

    let string = input[0];
    let pattern = /([#|])(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;
    let matches = string.match(pattern);

    if (matches === null) {
        return "You have food to last you for: 0 days";
    }

    let calorieSum = 0;

    for (item of matches) {
        let match = pattern.exec(string);
        calorieSum += Number(match.groups.calories);
    }

    console.log(`You have food to last you for: ${Math.trunc(calorieSum / 2000)} days!`);

    for (let match1 of matches) {
        let tokens = "";
        if (match1.includes("#")) {
            tokens = match1.split("#");
        } else {
            tokens = match1.split("|");
        }

        console.log(`Item: ${tokens[1]}, Best before: ${tokens[2]}, Nutrition: ${tokens[3]}`);
    }
}

console.log(adAstra([  ]
))