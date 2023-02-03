function pallindrome(arr) {

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        let currentStr = String(currentNum);

        let splitStr = currentStr.split("");
        let reverseStr = splitStr.reverse();
        let reversedStr = reverseStr.join("");

        if (currentStr === reversedStr) {
            console.log("true");
        } else {
            console.log("false");
        }

    }
}

pallindrome([123, 323, 421, 121])