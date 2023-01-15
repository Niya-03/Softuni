function trekingMania (input){
    let groupsCount = Number(input[0]);

    let peopleCount = 0;
    let inputL = input.length;

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < inputL; i++){
        let counter = Number(input[i]);
        peopleCount = peopleCount + counter;
    }

    for(let i = 1; i < inputL; i++){
        let peopleInGroup = Number(input[i]);

        if(peopleInGroup < 6){
            musala += peopleInGroup;
        } else if (peopleInGroup < 13){
            monblan += peopleInGroup;
        } else if (peopleInGroup < 26){
            kilimanjaro += peopleInGroup;
        } else if (peopleInGroup < 41){
            k2 += peopleInGroup;
        } else if (peopleInGroup >= 41){
            everest += peopleInGroup;
        }
    }

    console.log(`${(musala / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(monblan / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(k2 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(everest / peopleCount * 100).toFixed(2)}%`);
}

trekingMania(["10",
"10",
"5",
"1",
"100",
"12", "26",
"17",
"37",
"40",
"78"])