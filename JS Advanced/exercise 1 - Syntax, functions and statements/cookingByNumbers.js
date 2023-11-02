function cookingByNumbers(num, com1, com2, com3, com4, com5) {
    num = Number(num);
    let arr = [];
    let current = "";
    arr.push(com1, com2, com3, com4, com5);

    for (let i = 0; i < 5; i++) {
        current = arr[i];

        if (current == "chop") {
            num = chop(num);
            console.log(num);
        }
        if (current == "dice") {
            num = dice(num);
            console.log(num);
        }
        if (current == "spice") {
            num = spice(num);
            console.log(num);
        }
        if (current == "bake") {
            num = bake(num);
            console.log(Math.floor(num));
        }
        if (current == "fillet") {
            num = fillet(num);
            console.log(num.toFixed(1));
        }
    }

    function chop(number) {
        return number / 2;
    }

    function dice(number) {
        return Math.sqrt(number);
    }

    function spice(number) {
        return number + 1;
    }

    function bake(number) {
        return number * 3;
    }

    function fillet(number) {
        return number * 0.8;
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')