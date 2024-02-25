function solution() {
    let obj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    return function (input) {
        let [command, el2, quantity] = input.split(" ");

        if (command == "restock") {
            return restock(el2, quantity);
        } else if (command == "prepare") {
            return prepare(el2, quantity);
        } else if (command == "report") {
            return report(obj);
        }
    }

    function restock(microelement, quantity) {
        obj[microelement] = Number(quantity) + obj[microelement];
        return "Success";
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        switch (recipe) {
            case "apple":
                if (obj.carbohydrate - 1 * quantity < 0) {
                    return "Error: not enough carbohydrate in stock";
                } else {
                    obj.carbohydrate -= 1 * quantity;
                }

                if (obj.flavour - 2 * quantity < 0) {
                    return "Error: not enough flavour in stock";
                } else {
                    obj.flavour -= 2 * quantity;
                }
                return "Success";
                break;
            case "lemonade":
                if (obj.carbohydrate - 10 * quantity < 0) {
                    return "Error: not enough carbohydrate in stock";
                } else {
                    obj.carbohydrate -= 10 * quantity;
                }

                if (obj.flavour - 20 * quantity < 0) {
                    return "Error: not enough flavour in stock";
                } else {
                    obj.flavour -= 20 * quantity;
                }
                return "Success";
                break;
            case "burger":
                if (obj.carbohydrate - 5 * quantity < 0) {
                    return "Error: not enough carbohydrate in stock";
                } else {
                    obj.carbohydrate -= 5 * quantity;
                }

                if (obj.flavour - 3 * quantity < 0) {
                    return "Error: not enough flavour in stock";
                } else {
                    obj.flavour -= 3 * quantity;
                }

                if (obj.fat - 7 * quantity < 0) {
                    return "Error: not enough fat in stock";
                } else {
                    obj.fat -= 7 * quantity;
                }
                return "Success";
                break;
            case "eggs":
                if (obj.protein - 5 * quantity < 0) {
                    return "Error: not enough protein in stock";
                } else {
                    obj.protein -= 5 * quantity;
                }
                if (obj.fat - 1 * quantity < 0) {
                    return "Error: not enough fat in stock";
                } else {
                    obj.fat -= 1 * quantity;
                }

                if (obj.flavour - 1 * quantity < 0) {
                    return "Error: not enough flavour in stock";
                } else {
                    obj.flavour -= 1 * quantity;
                }
                return "Success";
                break;
            case "turkey":
                if (obj.protein - 10 * quantity < 0) {
                    return "Error: not enough protein in stock";
                } else {
                    obj.protein -= 10 * quantity;
                }

                if (obj.carbohydrate - 10 * quantity < 0) {
                    return "Error: not enough carbohydrate in stock";
                } else {
                    obj.carbohydrate -= 10 * quantity;
                }

                if (obj.fat - 10 * quantity < 0) {
                    return "Error: not enough fat in stock";
                } else {
                    obj.fat -= 10 * quantity;
                }

                if (obj.flavour - 10 * quantity < 0) {
                    return "Error: not enough flavour in stock";
                } else {
                    obj.flavour -= 10 * quantity;
                }
                return "Success";
                break;
        }
    }

    function report(obj) {
        let result = "";
        for (const key in obj) {
            result += `${key}=${obj[key]} `;
        }
        return result.substring(0,result.length-1);
    }
}

let manager = solution();

console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 

//     ['', 'protein=0 carbohydrate=4 fat=3 flavour=5']