function sortingNums(arr){
    arr.sort((a, b) => a - b);
    let res = [];
    while(arr.length>0){
        let small = arr.shift();
        let big = arr.pop();
        res.push(small);
        res.push(big);
    }
   return res.join("\n")
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
