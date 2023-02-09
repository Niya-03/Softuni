function lastKNumbersSequance(n, k) {
    let seq = [1];

    for (let i = 1; i <= n - 1; i++) {

        let sumNums = seq.slice(-k);
        let sum = 0;

        for (let i = 0; i < sumNums.length; i++) {
            let currentNum = sumNums[i];
            sum += currentNum;
        }
        seq.push(sum);
    }

    return seq;
}

lastKNumbersSequance(8, 2)