function maxSequence(arr1){
    let arr = arr1;
    let sequence = [];

    for(let i = 0; i < arr.length; i++){
        let currentElement = arr[i];
        let currentSequence = [];

        currentSequence.push(currentElement);

        for(let j = i+1; j < arr.length; j++){
            let nextElement = arr[j];

            if(currentElement !== nextElement){
                break;
            }else{
                currentSequence.push(nextElement)
            }
        }

        if(currentSequence.length > sequence.length){
            sequence = currentSequence;
        }
    }

    console.log(sequence.join(" "));
}

maxSequence([1, 1, 1, 2, 3, 1, 3, 3])