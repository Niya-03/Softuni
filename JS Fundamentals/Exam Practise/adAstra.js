function adAstra(input) {
    let string = input[0];
    let pattern = /([#|])(?<name>[A-Za-z ]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;
    let matches = string.match(pattern);
    if (matches == null) {
        return "You have food to last you for: 0 days";
    }
    let calorieSum = 0;
    let days = 0;

    for (item of matches) {
        let match = pattern.exec(string);
        calorieSum += Number(match.groups.calories);
    }

    days = parseInt(calorieSum / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (let match of matches) {
        let tokens = "";
        if (match.includes("#")) {
            tokens = match.split("#");
        } else {
            tokens = match.split("|");
        }

        console.log(`Item: ${tokens[1]}, Best before: ${tokens[2]}, Nutrition: ${tokens[3]}`);
    }

}

console.log(adAstra([ '$$#@@%^&#Fish#24/12/20#100#|#Incorrect#19.03.20#50|$5*(@!#Ice Cream#03/10/21#100#^#@aswe|Milk|05/09/20|20|' ]
))