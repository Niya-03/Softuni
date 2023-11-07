function processOddPositions(input){
    let odd = [];
    for(let i = 0; i < input.length; i++){
        if(i%2!==0){
            odd.push(input[i]);
        }
    }

    odd = odd.map(a => a*2);
    odd= odd.reverse();
    return odd.join(" ");
}

processOddPositions([10, 15, 20, 25])