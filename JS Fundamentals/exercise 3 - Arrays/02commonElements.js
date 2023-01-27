function commonElements(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){

        for(let j = 0; j <arr2.length; j++){
            let element1 = arr1[i];
            let element2 = arr2[j];

            if(element1 === element2){
                console.log(element1);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)