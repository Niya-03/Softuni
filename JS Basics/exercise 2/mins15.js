function mins15(input){
    let hours = Number(input[0])
    let mins = Number(input[1]) + 15

    if(mins > 59){
        hours ++
        mins = mins - 60
    }

    if(hours > 23){
        hours = hours - 24
    }

    if(mins < 10){
        console.log(`${hours}:0${mins}`)
    } else {
        console.log(`${hours}:${mins}`)
    }
}

//mins15(["0", "01"])