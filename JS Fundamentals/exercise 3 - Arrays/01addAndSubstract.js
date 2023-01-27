function addAndSubstract(array){
    let newArray = [];
    let sumOriginal = 0;
    let sumNew = 0;
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i];
        sumOriginal+=array[i];

        if(currentNum % 2 === 0){
            currentNum+=i;
        }else{
            currentNum-=i;
        }

        newArray.push(currentNum);
        sumNew+=currentNum;
    }

    console.log(newArray);
    console.log(sumOriginal);
    console.log(sumNew);
}

addAndSubstract([-5, 11, 3, 0, 2])