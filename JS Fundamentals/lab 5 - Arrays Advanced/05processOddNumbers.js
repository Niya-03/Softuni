function processOddNumbers (arr){

    let filtered = arr.filter((x,i) => i%2==1);
    let processed = filtered.map(x => x*2);
    let result = processed.reverse();

    return result.join(" ");
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));