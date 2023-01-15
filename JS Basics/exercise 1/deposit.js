function deposit(input){
    let deposit = Number(input[0])
    let period = Number(input[1])
    let lihva = Number(input[2])

    let sum = deposit + period *((deposit*lihva / 100) / 12)
    console.log(sum) 
}

//deposit([200, 3, 5.7])