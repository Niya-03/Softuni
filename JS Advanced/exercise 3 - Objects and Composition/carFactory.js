function carFactory(car){
    let result = {};
    let {model} = car;
    result.model = model;
    let wheel = car.wheelsize;

    if(car.power <= 90 || car.volume <= 1800){
        result.engine = {power: 90, volume: 1800};

    }else if(car.power <= 120 || car.volume <= 2400){
        result.engine = {power: 120, volume: 2400};

    }else if(car.power <= 200 || car.volume <= 3500){
        result.engine = {power: 200, volume: 3500};
    }

    result.carriage = {type: car.carriage, color: car.color};

    if(car.wheelsize %2 ==0){
        wheel = car.wheelsize -1;
    }

    result.wheels = [];
    while(result.wheels.length < 4){
        result.wheels.push(wheel);
    }

    return result;
}

console.log(carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 }))