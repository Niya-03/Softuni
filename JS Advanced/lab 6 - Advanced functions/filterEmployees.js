function filterEmployees(data, criteria) {
    let parsed = JSON.parse(data);
    let [currentCriteria, value] = criteria.split("-");
    let result = [];
    let counter = 0;

    for (let obj of parsed) {
        if (currentCriteria == "all") {
            result.push(`${counter}. ${getValue(obj, "first_name")} ${getValue(obj, "last_name")} - ${getValue(obj, "email")}`);
            counter++;
            continue;
        }

        for (let key in obj) {
            if (key == currentCriteria && obj[key] == value) {
                result.push(`${counter}. ${getValue(obj, "first_name")} ${getValue(obj, "last_name")} - ${getValue(obj, "email")}`);
                counter++;
            }
        }
    }


    function getValue(object, criteria) {
        return object[criteria];
    }

    return result.join("\n")
}

console.log(filterEmployees(`[{
    "id": "1",   
    "first_name": "Ardine",    
    "last_name": "Bassam",    
    "email": "abassam0@cnn.com",    
    "gender": "Female"    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"    
    },   
    {   
    "id": "3",   
    "first_name": "Evanne",   
    "last_name": "Maldin",   
    "email": "emaldin2@hostgator.com",   
    "gender": "Male"   
    }]`,
    'all'))