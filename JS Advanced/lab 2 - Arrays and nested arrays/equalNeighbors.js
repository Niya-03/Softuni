function equalNeighbors(arr){
    let equals = 0;
    let current = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
         
        for(let b = 0; b < arr[i].length; b++){
            if(i+1 == arr.length){
                break;
            }
            if(current === arr[i+1][b]){
                equals+=1;
            }
        }
        if(i+1 == arr.length){
            break;
        }
        current = arr[i+1][0];
        }

    console.log(equals)
}

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)