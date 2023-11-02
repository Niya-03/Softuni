function gcd(num1, num2){
    let cd = num1%num2;

    while(cd !== 0){
        num1 = num2;
        num2 = cd;
        cd = num1%num2;
    }
    console.log(num2);
}

gcd(2154,458)