function reverseNum (num, array){

    let newArray = [];
    for(let i = num-1; i >= 0 ; i--){
        let currentNum = array[i];
        newArray.push(currentNum);
    }

    let str = newArray.join(" ");
    console.log(str)
}

reverseNum(3, [10, 20, 30, 40, 50])