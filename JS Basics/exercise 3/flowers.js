function flowers(input){
    let flowerType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalSum = 0;

    switch(flowerType){
        case "Roses": totalSum = flowersCount * 5;
            if(flowersCount > 80){
                totalSum= totalSum * 0.90;
            }break;

        case "Dahlias": totalSum = flowersCount * 3.80;
            if(flowersCount > 90){
                totalSum = totalSum * 0.85;
            } break;

        case "Tulips": totalSum = flowersCount * 2.80;
            if(flowersCount > 80){
                totalSum = totalSum * 0.85;
            } break;

        case "Narcissus": totalSum = flowersCount * 3;
            if(flowersCount < 120){
                totalSum = totalSum * 1.15;
            } break;

        case "Gladiolus": totalSum = flowersCount * 2.50;
            if(flowersCount < 80){
                totalSum = totalSum * 1.2;
            } break;
        default:
    }

    if(budget >= totalSum){
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(budget - totalSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalSum - budget).toFixed(2)} leva more.`)
    }
}