function searchForNum(arr1, arr2) {
    let manipulation = arr1.slice(0, arr2[0]);
    manipulation.splice(0, arr2[1]);

    let specialNum = arr2[2];
    let occurenceCounter = 0;

    for (let i = 0; i < manipulation.length; i++) {
        let currentElement = manipulation[i];

        if (currentElement === specialNum) {
            occurenceCounter++;
        }
    }

    return `Number ${specialNum} occurs ${occurenceCounter} times.`;
}

console.log(searchForNum([7, 5, 5, 5, 5, 8, 2, 7],

    [3, 1, 5]))