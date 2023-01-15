function solve(){
    console.log("Hello Softuni");
}

solve();

function squareArea(input){
    input=[5, 6] 
    let a = Number(input[1]);
    let area = a*a;
    console.log(area)
}

squareArea();


function hello(input){
    let name = input[0]
    console.log("Hello, " + name + "!")
}

hello(["Nia"]);

function inchToSm(input){
    let inch = Number(input[0])
    let sm = inch * 2.54
    console.log(sm)
}

inchToSm(["2", "3"])