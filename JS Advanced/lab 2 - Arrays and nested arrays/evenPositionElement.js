function evenPos(input){
    let even = [];

    for(let i = 0; i < input.length; i++){
        if(i%2==0){
            even.push(input[i]);
        }
    }

    console.log(even.join(" "));
}

evenPos(['20', '30', '40', '50', '60'])