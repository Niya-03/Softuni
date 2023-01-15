 function day (input){
    let day = Number(input[0]);
    
    switch(day){
        case 1: console.log("Monday");break;
        case 2: console.log("Tuesday");break;
        case 3: console.log("Wednesday");break;
        case 4: console.log("Thursday");break;
        case 5: console.log("Friday");break;
       case 6: console.log("Saturday");break;
       case 7: console.log("Sunday");break;

       default: console.log("Error"); break;
    }
}

day(["9"])

function week (input){
     let day = input[0];

     switch (day){
         case "Monday": 
         case "Tuesday":
         case "Wednesday":
         case "Thursday":
         case "Friday": console.log("Working day");break;
         case "Saturday":
         case "Sunday": console.log("Weekend");break;
         default: console.log("Error"); break;    
     }
 }

 week(["April"])

function animal(input){
    let animal = input[0];

    switch(animal){
        case "dog": console.log("mammal"); break;
        case "snake":
        case "crocodile":
        case "tortoise": console.log("reptile"); break;
        default: console.log("unknown");break;
    }
}

animal(["cat"])

function title(input){
    let age = Number(input[0]);
    let gender = input[1];

    if (gender === "f"){
        if(age < 16){
            console.log("Miss");
        } else{
            console.log("Ms.");
        }

    }else if(gender === "m"){
        if(age < 16){
            console.log("Master");
        } else{
            console.log("Mr.");
        }
    }
}

title(["16",
"f"])

function shop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    if (town === "Sofia") {
        switch (product) {
            case "coffee": result = quantity * 0.50; break;
            case "water": result = quantity * 0.80; break;
            case "beer": result = quantity * 1.20; break;
            case "sweets": result = quantity * 1.45; break;
            case "peanuts": result = quantity * 1.60; break;
        }
    }
    else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": result = quantity * 0.40; break;
            case "water": result = quantity * 0.70; break;
            case "beer": result = quantity * 1.15; break;
            case "sweets": result = quantity * 1.30; break;
            case "peanuts": result = quantity * 1.50; break;
        }
    }
    else if (town === "Varna") {
        switch (product) {
            case "coffee": result = quantity * 0.45; break;
            case "water": result = quantity * 0.70; break;
            case "beer": result = quantity * 1.10; break;
            case "sweets": result = quantity * 1.35; break;
            case "peanuts": result = quantity * 1.55; break;
        }
    }

    console.log(result)
}

function number (input){
    let num = Number(input[0]);

    if(num >= -100 && num <= 100 && num != 0){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

function workTime(input) {
    let time = Number(input[0]);
    let day = input[1];

    if (day === "Sunday") {
        console.log("closed");
    } else {
        if (time >= 10 && time <= 18) {
            console.log("open");
        } else {
            console.log("closed");
        }
    }
}

function cinema(input) {
    let day = input[0];

    switch (day) {
        case "Monday": console.log(12); break;
        case "Tuesday": console.log(12); break;
        case "Wednesday": console.log(14); break;
        case "Thursday": console.log(14); break;
        case "Friday": console.log(12); break;
        case "Saturday": console.log(16); break;
        case "Sunday": console.log(16); break;
    }
}

function fOrV(input) {
    let product = input[0];

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log("fruit"); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        default: console.log("unknown"); break;
    }
}

function invalid(input) {
    let num = Number(input[0]);

    if (num >= 100 && num <= 200) {
        console.log();
    } else if (num === 0) {
        console.log();
    } else {
        console.log("invalid");
    }
}

function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": console.log((quantity * 2.50).toFixed(2)); break;
            case "apple": console.log((quantity * 1.20).toFixed(2)); break;
            case "orange": console.log((quantity * 0.85).toFixed(2)); break;
            case "grapefruit": console.log((quantity * 1.45).toFixed(2)); break;
            case "kiwi": console.log((quantity * 2.70).toFixed(2)); break;
            case "pineapple": console.log((quantity * 5.50).toFixed(2)); break;
            case "grapes": console.log((quantity * 3.85).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": console.log((quantity * 2.70).toFixed(2)); break;
            case "apple": console.log((quantity * 1.25).toFixed(2)); break;
            case "orange": console.log((quantity * 0.90).toFixed(2)); break;
            case "grapefruit": console.log((quantity * 1.60).toFixed(2)); break;
            case "kiwi": console.log((quantity * 3.00).toFixed(2)); break;
            case "pineapple": console.log((quantity * 5.60).toFixed(2)); break;
            case "grapes": console.log((quantity * 4.20).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }
}

function comission(input) {
    let town = input[0];
    let sales = Number(input[1]);

    if (town === "Sofia") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 0.05).toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.07).toFixed(2))
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.08).toFixed(2))
        } else if (sales > 10000) {
            console.log((sales * 0.12).toFixed(2))
        } else {
            console.log("error")
        }
    } else if (town === "Varna") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 0.045).toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.075).toFixed(2))
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.10).toFixed(2))
        } else if (sales > 10000) {
            console.log((sales * 0.13).toFixed(2))
        } else {
            console.log("error")
        }
    } else if (town === "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            console.log((sales * 0.055).toFixed(2))
        } else if (sales > 500 && sales <= 1000) {
            console.log((sales * 0.08).toFixed(2))
        } else if (sales > 1000 && sales <= 10000) {
            console.log((sales * 0.12).toFixed(2))
        } else if (sales > 10000) {
            console.log((sales * 0.145).toFixed(2))
        } else {
            console.log("error")
        }
    } else {
        console.log("error")
    }
}

comission(["Kaspichan",
"-50"])























