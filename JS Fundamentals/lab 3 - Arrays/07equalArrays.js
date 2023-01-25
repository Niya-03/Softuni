function equalArrays(arr1, arr2){

    let sum = 0;

    for(let i = 0; i < arr1.length; i++){
        let element1 = arr1[i];
        let element2 = arr2[i];

        if(element1 !== element2){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }

        sum+= Number(element1);

        if(i === (arr1.length - 1)){
            console.log(`Arrays are identical. Sum: ${sum}`);
        }
    }

}

equalArrays(['1'], ['10'])