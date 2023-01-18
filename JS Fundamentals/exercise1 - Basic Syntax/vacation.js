function vacation(number, type, day){

    let price = 0;

    if(type==="Students"){

        if(day === "Friday"){
            price = number * 8.45;
        }else if(day === "Saturday"){
            price = number * 9.80;
        }else if(day ==="Sunday"){
            price = number * 10.46;
        }

        if(number>=30){
            price = price * 0.85;
        }

    }else if(type === "Business"){

        if(number>=100){
            number-=10;
        }
        
        if(day === "Friday"){
            price = number * 10.90;
        }else if(day === "Saturday"){
            price = number * 15.60;
        }else if(day ==="Sunday"){
            price = number * 16;
        }

    }else if(type === "Regular"){

        if(day === "Friday"){
            price = number * 15;
        }else if(day === "Saturday"){
            price = number * 20;
        }else if(day ==="Sunday"){
            price = number * 22.50;
        }

        if(number>= 10 && number <=20){
            price = price * 0.95;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`)
}

vacation(40,
    "Regular",
    "Saturday"
    
    )