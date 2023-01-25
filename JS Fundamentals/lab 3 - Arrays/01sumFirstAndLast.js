function sumFirstAndLast(input){
    let array = input;

    let firstElement = array[0];
    let lastElement = array[array.length - 1];

    console.log(lastElement + firstElement);
}

sumFirstAndLast([1, 2 ,5])