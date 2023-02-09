function firstAndLastKNumbers (arr1){
    let arr = arr1;
    let kNum = arr[0];
    
    let firstArr = arr.slice(1 , kNum+1);
    let secondArr = arr.slice(-(kNum) , );

    console.log(firstArr.join(" "));
    console.log(secondArr.join(" "));
} 

firstAndLastKNumbers([2, 
    7, 8, 9]
    )