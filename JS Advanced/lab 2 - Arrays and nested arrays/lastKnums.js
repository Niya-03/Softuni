function lastKnums(n, k) {
    let sum = 0;
    let arr = [1];

    for (let i = 1; i < n; i++) {
        if (arr.length < k) {
            for (element of arr) {
                sum += element;
            }
            arr.push(sum);
        } else {
            for (let x = k; x > 0; x--) {
                sum += arr[i - x];
            }
            arr.push(sum);
        }
        sum = 0;
    }

    return arr;
}

lastKnums(8, 2)