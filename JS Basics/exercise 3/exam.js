function exam(input) {
    let examBeginningHour = Number(input[0]);
    let examBeginningMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examBeginningHour * 60 + examBeginningMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;

    if (arrivalTime > examTime) {
        console.log("Late");

        if (arrivalTime - examTime < 60) {
            console.log(`${arrivalTime - examTime} minutes after the start`);
        } else if (arrivalTime - examTime >= 60) {
            console.log(`${Math.floor((arrivalTime - examTime) / 60)}:${(arrivalTime - examTime) % 60} hours after the start`);
        }
    }
    else if (arrivalTime === examTime || arrivalTime >= examTime - 30) {
        console.log("On time");
        if (examTime - arrivalTime < 60 && examTime - arrivalTime != 0) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        }
    }
    else if (arrivalTime < examTime - 30) {
        console.log("Early");
        if (examTime - arrivalTime < 60) {
            console.log(`${examTime - arrivalTime} minutes before the start`);
        } 
        else if(examTime - arrivalTime === 60){
            console.log("1 00 hours before the start");
        }
        else if (examTime - arrivalTime > 60) {
            console.log(`${Math.floor((examTime - arrivalTime) / 60)}:${(examTime - arrivalTime) % 60} hours before the start`);
        }
    }
}

exam(["16",
    "05",
    "15",
    "00"])