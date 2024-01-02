function sortBy2criteria(arr){
    arr.sort((a,b) => {
        if(a.length - b.length == 0){
            return a.localeCompare(b);
        }else{
            return a.length - b.length
        }
    });

    console.log(arr.join("\n"))
}

sortBy2criteria(['test', 'Deny','omen', 'Default'])