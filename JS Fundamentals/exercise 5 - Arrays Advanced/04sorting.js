function sorting(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let length = arr.length;
    let newArr = [];

    for (let i = 0; i < length; i++) {
        let firstElement = sorted.pop();
        let secondElement = sorted.shift();

        newArr.push(firstElement, secondElement);
    }

    console.log(newArr.join(" "));
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])