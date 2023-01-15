function shop (input){
    let budget = Number(input[0])
    let gpu = Number(input[1])
    let cpu = Number(input[2])
    let ram = Number(input[3])

    let gpuSum = gpu * 250
    let cpuSum = (gpuSum * 0.35) * cpu
    let ramSum = (gpuSum * 0.10) * ram

    let total = gpuSum + cpuSum + ramSum

    if (gpu > cpu){
        total = total * 0.85
    }

    if(total <= budget){
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`)
    }
}


//shop(["900","2","1","3"])