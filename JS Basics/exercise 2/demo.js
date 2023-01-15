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