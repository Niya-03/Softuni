function roadRadar(speed, area) {
    speed = Number(speed);
    let diff = 0;
    let speeding = false;
    let limit = 0;
    let status = "";

    switch (area) {
        case "residential":
            if (speed > 20) {
                speeding = true;
                diff = speed - 20;
            }
            limit = 20;
            break;
        case "city":
            if (speed > 50) {
                speeding = true;
                diff = speed - 50;
            }
            limit = 50;
            break;
        case "interstate":
            if (speed > 90) {
                speeding = true;
                diff = speed - 90;
            }
            limit = 90;
            break;
        case "motorway":
            if (speed > 130) {
                speeding = true;
                diff = speed - 130;
            }
            limit = 130;
            break;
    }

    if (diff <= 20) {
        status = "speeding";
    } else if (diff <= 40) {
        status = "excessive speeding";
    } else if (diff > 40) {
        status = "reckless driving";
    }

    if (speeding) {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

roadRadar(200, 'motorway')