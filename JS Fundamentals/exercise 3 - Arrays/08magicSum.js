function magicSum (arr1, magicNum){
    let arr = arr1;

    for(let i = 0; i < arr.length; i++){
        let currentSum = 0;
        let sumArr = [];

        if(i+1 === arr.length){
            break;
        }

        for(let j = i+1; j < arr.length; j++){

            let currentElement = arr[j];
            currentSum = arr[i] + currentElement;

            if(currentSum === magicNum){
                sumArr.push(arr[i]);
                sumArr.push(currentElement);
                console.log(sumArr.join(" "));
                sumArr = [];
                continue;
            }
        }  
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )