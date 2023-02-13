function bombNumbers(sequence, bombNumAndPower){
    let bombNum = bombNumAndPower[0];
    let power = bombNumAndPower[1];
    let length = sequence.length;

    for(let i = 0; i < length; i++){
        let currentElement = sequence[i];

        if(currentElement === bombNum){
            sequence.splice(sequence.indexOf(bombNum) - power, power*2+1);
        }
    }

    let sum = 0;
    sequence.map(x => sum+=x);
    return sum;
}

console.log(bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]))
