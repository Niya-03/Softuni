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