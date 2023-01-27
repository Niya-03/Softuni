function mergeArrays(arr1, arr2){
    let newArr = [];

    for(let i = 0; i < arr1.length; i++){
        let tempSum = 0;
        let concatenate = "";

        if(i % 2 === 0){
            tempSum+= (Number(arr1[i]) + Number(arr2[i]));
            newArr.push(tempSum);
        }else{
            concatenate = arr1[i] + arr2[i];
            newArr.push(concatenate);
        }
    }

    console.log(newArr.join(" - "))
}

mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])