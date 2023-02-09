function distinctArray(arr){
    let newArr = [];

    for(let i = 0; i<arr.length; i++){
        let b = 0
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }

    return newArr.join(" ");
}

console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));