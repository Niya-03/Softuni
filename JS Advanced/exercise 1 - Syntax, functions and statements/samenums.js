function samenums(num) {
    num = String(num);
    let i = 1;
    let base = num.substr(num.length - i, 1);
    let end = "";
    let sum = Number(base);
    let flag = true;
    num = num.substr(0, num.length - 1);

    while (num !== "") {
        //i++
        end = num.substr(num.length - 1, 1);
        sum += Number(end);
        if (end !== base) {
            flag = false;
        }
        num = num.substr(0, num.length - 1);

    }
    if (flag) {
        console.log("true");
    } else {
        console.log("false");
    }

    console.log(sum);
}

samenums(1234)