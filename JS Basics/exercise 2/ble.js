function movie(input){
    let budget = Number(input[0])
    let statistCount = Number(input[1])
    let outfitPrice = Number(input[2])

    let decor = budget * 0.10
    let outfitTotal = statistCount * outfitPrice

    if(statistCount > 150){
        outfitTotal = outfitTotal * 0.90
    }

    let sum = decor + outfitTotal

    if(sum <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`)
    } else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`)
    }
}

//movie(["9587.88","222","55.68"])

function record(input){
    let record = Number(input[0])
    let distance = Number(input[1])
    let timeForMetre = Number(input[2])

    let time = distance * timeForMetre
    let delay = Math.floor( distance / 15 ) * 12.5
     
    let final = time + delay

    if(time < record){
        console.log(`Yes, he succeeded! The new world record is ${final.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(final - record).toFixed(2)} seconds slower.`)
    }
}

//record(["10464","1500","20"])

function demo(input){
    let worldRecordInSecs = Number(input[0])
    let distanceInMeters = Number(input[1])
    let timeForMeter = Number(input[2])

    let totalSecs = distanceInMeters * timeForMeter
    let delay = Math.floor(distanceInMeters / 15)* 12.5

    let finalTime = totalSecs + delay

    if(finalTime < worldRecordInSecs){
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    } else{
        console.log(`No, he failed! He was ${(finalTime - worldRecordInSecs).toFixed(2)} seconds slower.`)
    }
}


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

function serial (input){
    let name = input[0]
    let episodeDuration = Number(input[1])
    let restDuration = Number(input[2])

    let timeForLunch = restDuration * 1/8
    let timeForRest = restDuration * 1/4

    let timeLeft = restDuration - timeForLunch - timeForRest

    if(timeLeft >= episodeDuration){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - episodeDuration)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeDuration - timeLeft)} more minutes.`)
    }
}

serial(["Teen Wolf",
"48",
"60"])





