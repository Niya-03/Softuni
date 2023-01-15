function convertor(input){
    let usd = Number(input[0])
    console.log(usd*1.79549 )
}

//convertor([1])

function radToDegree(input){
    let rad = Number(input[0])
    let degree = rad*180/Math.PI
    console.log(degree)
}

//radToDegree([3.1416])


function deposit(input){
    let deposit = Number(input[0])
    let period = Number(input[1])
    let lihva = Number(input[2])

    let sum = deposit + period *((deposit*lihva / 100) / 12)
    console.log(sum) 
}

//deposit([200, 3, 5.7])


function literature(input){
    let numberOfPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let days = Number(input[2])

    let readingTime = numberOfPages / pagesPerHour
    let timePerDay = readingTime / days
    
    console.log(timePerDay)
}

//literature([212, 20, 2])

function smetka(input){
   let numberOfPens = Number(input[0])
   let numberOfMarkers = Number(input[1])
   let litresOfPreparat = Number(input[2])
   let discount = Number(input[3])

   let pricePens = numberOfPens*5.80
   let priceMarkers = numberOfMarkers*7.20
   let pricePreparat = litresOfPreparat*1.20

   let sum = pricePens + priceMarkers + pricePreparat
   let discountSum = sum*(discount/100)

   let final = sum - discountSum
   console.log(final)
}

//smetka([4, 2, 5, 13])

function repainting(input){
   let metersOfNylon = Number(input[0])
   let litresOfPaint = Number(input[1])
   let litresOfRazreditel = Number(input[2])
   let hours = Number(input[3])

   let priceOfNylon = (metersOfNylon + 2)*1.50
   let priceOfPaint = (litresOfPaint + litresOfPaint*0.10)*14.50
   let priceOfRazreditel = litresOfRazreditel*5 
   let priceOfBags = 0.40

   let sumOfMaterials = priceOfNylon + priceOfPaint + priceOfRazreditel + priceOfBags
   let sumForWork = (sumOfMaterials * 0.30) * hours

   console.log(sumOfMaterials + sumForWork)
}

//repainting([10, 11, 4, 8])

function delivery(input){
    let numberOfChickenMenus = Number(input[0])
    let numberOfFishMenus = Number(input[1])
    let numberOfVegMenus = Number(input[2])
    let delivery = 2.50

    let priceOfChicken = numberOfChickenMenus*10.35
    let priceOfFish = numberOfFishMenus*12.40
    let priceOfVeg = numberOfVegMenus*8.15
    let sumOfMenus = priceOfChicken + priceOfFish + priceOfVeg
    let priceOfDessert = sumOfMenus*0.20

    let total = sumOfMenus + priceOfDessert + delivery

    console.log(total)
}

//delivery([2, 4 ,3])

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