function rotateArray (arr, num){
    for(let i = 0; i < num ; i++){
        let el = arr.pop();
        arr.unshift(el);
    }

    console.log(arr.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)