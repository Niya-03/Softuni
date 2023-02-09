function listOfProducts (arr){
    let sorted = arr.sort((a,b) => a.localeCompare(b));
    let list = sorted.map((x, i) => `${i+1}.${x}`).join("\n");
    return list;
}

listOfProducts(['Watermelon', 'Banana', 'Apples'])