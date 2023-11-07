function negPosNums(input) {
    let newArr = [];
    for (num of input) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for (el of newArr) {
        console.log(el);
    }
}

negPosNums([7, -2, 8, 9])