function equalSums(arr1){
    let arr = arr1;
    let leftSum = 0;

    for(let i = 0; i< arr.length; i++){
        
        let rightSum = 0;
        
        for(let j = arr.length; j>i; j--){
         let element2 = arr[j-1];
         rightSum+= element2;
        }

        leftSum+= arr[i];

        if(leftSum === rightSum){
            console.log(i)
            break;
        } else if (i === arr.length-1){
            console.log("no");
        }
    }
}

equalSums([1, 2, 3])