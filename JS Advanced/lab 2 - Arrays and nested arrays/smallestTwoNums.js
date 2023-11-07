function smallestTwoNums(input){
    input = input.sort((a,b) => a-b);
    let res = [];
    res.push(input[0]);
    res.push(input[1]);
    console.log(res.join(" "));
}

smallestTwoNums([30, 15, 50, 5])