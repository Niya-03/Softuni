function asciiSumator(input){
    let firstChar = input.shift();
    let secondChar = input.shift();
    let string = input.shift().split("");
    let sum = 0;

    let firstCharCode = firstChar.charCodeAt(0);
    let secondCharCode = secondChar.charCodeAt(0);

    for (let char of string) {
        let code = char.charCodeAt(0);

        if(code > firstCharCode && code < secondCharCode){
            sum+=code;
        }else if(code < firstCharCode && code > secondCharCode){
            sum+=code;
        }
    }
    console.log(sum);
}

asciiSumator(['?',
'E',
'@ABCEF']

) 