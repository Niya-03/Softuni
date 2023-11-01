function squareStars(num){
    if(num == undefined){
        num = 5;
    }
    let result = [];

    for(let i = 0; i <num; i++){
        for(let b = 0; b <num; b++){
            result.push("*");
        }
        console.log(result.join(" "));
        result = [];
    }
}

squareStars(6)