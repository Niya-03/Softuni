function condensedNumber (arr){

    let currArr = arr;

    while(currArr.length > 1){
        let condensed = [];
        for(let i = 0; i < currArr.length-1; i++){

            let num1 = currArr[i];
            let num2 = currArr[i+1];
        
            condensed.push(num1 + num2);
        }

        currArr = condensed;
    }

        
       console.log(currArr.join(""));
}

condensedNumber([1])