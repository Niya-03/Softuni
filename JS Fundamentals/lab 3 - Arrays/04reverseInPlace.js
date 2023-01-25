function reverseInPlace (array){
    for(let i = 0; i < array.length / 2; i ++){
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }

    let str = array.join(" ");
    console.log(str);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
