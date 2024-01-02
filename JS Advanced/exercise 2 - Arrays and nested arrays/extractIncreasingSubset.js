function extractIncreasingSubset(input){
    let res = [];
    let begin = input.shift();
    res.push(begin);

    for(let i = 0; i < input.length; i++){
        if(input[i] >= res[res.length-1]){
            res.push(input[i]);
        }
    }

    return res;
}

console.log(extractIncreasingSubset([1,

    3,
    
    8,
    
    4, 
    
    10, 12, 3, 2, 24]));