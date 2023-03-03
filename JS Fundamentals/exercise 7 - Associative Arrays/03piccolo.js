function piccolo(input) {
    let parking = new Set;

    for (let element of input) {
        let [command, number] = element.split(", ");

        if (command === "IN") {
            parking.add(number);
        } else {
            parking.delete(number);
        }
    }

    let result = Array.from(parking);

    if(result.length === 0){
        return "Parking Lot is Empty";
    }

    result.sort()
    
    for (const element of result) {
        console.log(element);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);