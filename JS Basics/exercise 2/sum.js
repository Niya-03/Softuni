function sum(input){
    let timeFirst = Number(input[0])
    let timeSecond = Number(input[1])
    let timeThird = Number(input[2])

    let timeFull = timeFirst + timeSecond + timeThird
    let minutes = Math.floor(timeFull/60)
    let seconds = timeFull % 60

    if (seconds < 10){
       console.log(`${minutes}:0${seconds}`) 
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}