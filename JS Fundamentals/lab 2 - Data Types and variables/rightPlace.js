function rightPlace(text, char, target){
    let res = text.replace("_", char);
    let output = res === target? "Matched" : "Not Matched";
    console.log(output);
}



