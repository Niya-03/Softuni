function sortBy2Criteria(arr){
    let sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    return sorted.join("\n"); 
}

console.log(sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));