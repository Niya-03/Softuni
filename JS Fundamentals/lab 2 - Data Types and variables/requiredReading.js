function reading (pages, pagesInHour, days){
    let neededHours = pages / pagesInHour;
    let hoursPerDay = neededHours / days;

    console.log(hoursPerDay);
}

reading(432,15,4)