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

function bonus (input){
    let bonus  = 0.0
    let score = Number(input[0])

    if (score <= 100){
        bonus = 5
    } else if (score > 1000){
        bonus = 0.10 * score
    } else {
        bonus = 0.20 * score
    }

    if(score%2 === 0){
        bonus ++
    } else if (score%10 === 5){
        bonus += 2
    }

    console.log(bonus)
    console.log(score + bonus)
}

//bonus(["20"])

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

function toyShop(input){
    let holiday = Number(input[0])
    let puzzlesCount = Number(input[1])
    let dollsCount = Number(input[2])
    let bearsCount = Number(input[3])
    let minionsCount = Number(input[4])
    let trucksCount = Number(input[5])

    let puzzlesPrice = puzzlesCount* 2.6
    let dollsPrice = dollsCount* 3
    let bearsPrice = bearsCount* 4.1
    let minionsPrice = minionsCount* 8.2
    let trucksPrice = trucksCount* 2

    let sumToys = puzzlesPrice + dollsPrice + 
    bearsPrice + minionsPrice + trucksPrice

    let toysCount = puzzlesCount + dollsCount + 
    bearsCount + minionsCount + trucksCount

    if(toysCount >= 50){
        sumToys = sumToys*0.75
    }

    total = sumToys * 0.90
    
    if(total >= holiday){
        console.log(`Yes! ${(total - holiday).toFixed(2)} lv left.`)
    } else{
        console.log(`Not enough money! ${(holiday - total).toFixed(2)} lv needed.`)
    }


}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

