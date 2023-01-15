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