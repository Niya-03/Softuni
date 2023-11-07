function diagonalSum(input){
    let main = 0;
    let second = 0;
    for (let i = 0; i < input.length; i++) {
        main +=input[i][i];
    }

    for (let i = 0; i < input.length; i++) {
        second +=input[i][input.length-1-i];
    }

    console.log(main, second);
}

diagonalSum([[20, 40],
    [10, 60]]
   )