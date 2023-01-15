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