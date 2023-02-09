function negativeOrPositive(arr1) {
    let arr = [];

    for (let i = 0; i < arr1.length; i++) {
        let currentNum = Number(arr1[i]);

        if (currentNum < 0) {
            arr.unshift(currentNum);
        } else {
            arr.push(currentNum);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

negativeOrPositive(['3', '-2', '0', '-1'])