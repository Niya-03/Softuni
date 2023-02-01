function repeatString(string, num){
    
    let newStr =""

    for(let i = 0; i < num; i++){
        newStr += string;
    }

    return newStr;
}

console.log(repeatString("abc", 3))