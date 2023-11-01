function mathOperation(num1, num2, op){
    let result = 0;

    switch(op){
        case "+":result = num1 + num2; break;
        case "-": result = num1 - num2;break;
        case "*": result = num1 * num2;break;
        case "/": result = num1 / num2;break;
        case "%": result = num1 % num2;break;
        case "**": result = num1 ** num2;break;
    }

    console.log(result);
}

mathOperation(5,6,"+");