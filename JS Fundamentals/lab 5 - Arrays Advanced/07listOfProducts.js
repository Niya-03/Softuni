function listOfProducts(arr) {
    let sorted = arr.sort();
    let list = sorted.map((x, i) => `${i+1}.${x}`);
    console.log(list.join("\n"));
}

//listOfProducts(['Watermelon', 'Banana', 'Apples'])


function list(arr){
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let result = [];

    for(let i = 0; i < sorted.length; i++){
        let current = `${i+1}.${sorted[i]}`;
        result.push(current);
    }

    console.log(result.join("\n"));
}

list(['Watermelon', 'Banana', 'Apples'])