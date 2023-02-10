function bombNumbers(sequence, bombNumAndPower){
    let bombNum = bombNumAndPower[0];
    let power = bombNumAndPower[1];

    for(let i = 0; i < sequence.length; i++){
        let currentElement = sequence[i];

        if(currentElement === bombNum){
            sequence.splice(sequence.indexOf(currentElement) - power, power*2+1);
        }
    }
    let sum = 0;
    sequence.map(x => sum+=x);
    return sum;
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])