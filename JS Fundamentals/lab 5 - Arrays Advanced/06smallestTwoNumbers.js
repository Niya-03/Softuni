function smallestTwoNumbers (arr){
    let sorted = arr.sort((a,b) => a-b).slice(0,2).join(" ");
    return sorted;
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]
)