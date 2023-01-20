function spice(startingYield){
    let days = 0;
    let extractedSpice = 0;
    let leftSpice = 0;

    for(i = startingYield; i >= 100; i-=10){
        days++;
        extractedSpice+=i;

        //crew consumption

        extractedSpice-=26;
        leftSpice = i;
    }

    if(leftSpice >= 26){
        extractedSpice-=26;
    }

    console.log(days);
    console.log(extractedSpice);
}

spice(111)