function replaceRepeatingChars(str){
    let result = [];

    str = str.split("");

    for (let char of str) {
        if(result[result.length-1] !== char){
            result.push(char);
        }
    }

    console.log(result.join(""));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')