function circle(a){
    if(typeof(a) != "number"){
        console.log(`We can not calculate the circle area, because we receive a ${typeof(a)}.`);
        return;
    }

    let result = a**2 * Math.PI;
    console.log(result.toFixed(2));
}

circle("name")