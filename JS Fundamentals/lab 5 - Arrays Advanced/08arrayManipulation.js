function arrayManipulation (arr){
    let nums = arr.shift().split(" ").map(Number);

    for(let i = 0; i < arr.length; i++){
        let command = arr[i].split(" ");
        let manipulation = command[0];
        let firstNum = Number(command[1]);
        let secondNum = Number(command[2]);

        switch(manipulation){
            case"Add": nums.push(firstNum); break;
            case"Remove": nums = nums.filter(x => x !== firstNum); break;
            case"RemoveAt": nums.splice(firstNum, 1);break;
            case"Insert": nums.splice(secondNum, 0, firstNum);break;
        }
    }
    return nums.join(" ");
}

console.log(arrayManipulation(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
))