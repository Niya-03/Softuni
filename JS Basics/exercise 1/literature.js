function literature(input){
    let numberOfPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])

    let readingTime = numberOfPages / pagesPerHour
    let timePerDay = readingTime / days
    
    console.log(timePerDay)
}

//literature([212, 20, 2])