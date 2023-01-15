function aqua(input){
    let lenght = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let volume = lenght*width*height
    let volumeInLitres = volume*0.001
    let takenPlace = percent/100

    let neededLitres = volumeInLitres*(1 - takenPlace)

    console.log(neededLitres)
}

aqua([85, 75, 47, 17])