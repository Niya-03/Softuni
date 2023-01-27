function maxNumber(arr){
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let currentNum = arr[i];
        let tempTop = 0;
        let j = 0;

        for(j = (i+1); j < arr.length; j++){
            let rightNum = arr[j];

            if(currentNum > rightNum){
                tempTop = currentNum;
            }else{
                break;
            }     
        }

        if(currentNum <= arr[j]){
            continue;
        }

        if(i === (arr.length-1)){
            newArr.push(currentNum);
            break;
        }  

        if(tempTop === currentNum){
            newArr.push(tempTop);
        }      
    }

    console.log(newArr.join(" "));
}

maxNumber([0,
    19,
    42,
    2,
    49,
    45,
    0])