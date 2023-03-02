function meeting (input){
    let schedule = {};
    
    for (const line of input) {
        let [day, name] = line.split(" ");
        

        if(schedule.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            console.log(`Scheduled for ${day}`);
            schedule[day] = name;
        }
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)