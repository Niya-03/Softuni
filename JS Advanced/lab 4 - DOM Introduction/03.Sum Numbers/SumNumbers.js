function calc() {
    let input1 = document.getElementById("num1");
    num1 = Number(input1.value);
    let input2 = document.getElementById("num2");
    num2 = Number(input2.value);

    let output = document.getElementById("sum");
    output.value = num1+num2;
}
