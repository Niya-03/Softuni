function biggerHalf(input) {
    input = input.sort((a, b) => a - b);
    let res = [];
    let len = 0;
    if (input.length % 2 == 0) {
        len = input.length / 2;
    } else {
        len = Math.ceil(input.length / 2);
    }
    for (let i = 0; i < len; i++) {
        res.unshift(input[input.length - i - 1]);
    }
    return res;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])
