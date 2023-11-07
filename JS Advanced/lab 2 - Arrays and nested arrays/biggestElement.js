function biggestElement(input){
    let biggest = input[0][0];

    for(let row of input){
        for(let element of row ){
            if(element > biggest){
                biggest = element;
            }
        }
    }
    return biggest;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ))