function result(input){
    let grade = Number(input[0])

    if(grade >= 5.5){
        console.log("Excellent!")
    }
}

//result([5])

function greaterNumber(input){
    let a = Number(input[0])
    let b = Number(input[1])

    if (a > b){
        console.log(a)
    } else {
        console.log(b)
    }
}

//greaterNumber([3,7])

function evenOrOdd(input){
    let a = Number(input[0])
    
    if(a%2 !== 0){
        console.log("odd")
    } else{
        console.log("even")
    }
}

//evenOrOdd([2])

function guessPassword(input){
    let pass= input[0]

    if(pass === "s3cr3t!P@ssw0rd"){
        console.log("Welcome")
    } else{
        console.log("Wrong password!")
    } 
}

//guessPassword(["s3cr3t!P@ssw0rd"])

function number(input){
    let number = Number(input[0])

    if (number<100){
        console.log("Less than 100")
    } else if (number>200){
        console.log("Greater than 200")
    } else{
        console.log("Between 100 and 200")
    }
}

//number([101])

function speed(input){
    let speed = Number(input[0])

    if(speed <= 10){
        console.log("slow")

    } else if(speed <= 50){
        console.log("average")

    } else if(speed<=150){
        console.log("fast")
    
    } else if(speed <= 1000){
        console.log("ultra fast")
    } else {
        console.log("extremely fast")
    }

}

speed([1001])
