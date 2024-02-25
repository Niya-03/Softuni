function sortArray(arr, str) {

    if (str == "asc") {
        arr = ascend(arr);
    } else if (str == "desc") {
        arr = descend(arr);
    }

    return arr;

    function ascend(arr) {
        arr = arr.sort((a, b) => a - b);
        return arr;
    }

    function descend(arr) {
        arr = arr.sort((a, b) => b - a);
        return arr;
    }
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'))