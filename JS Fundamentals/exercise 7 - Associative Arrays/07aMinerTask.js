function minerTask(input){
    let resources = {};

    for(let i = 0; i<input.length; i+=2){
        let resource = input[i];
        let quantity = Number(input[i+1]);

        if(!resources.hasOwnProperty(resource)){
            resources[resource] = quantity
        }else{
            resources[resource] = resources[resource] + quantity;
        }
    }

    for(key in resources){
        console.log(`${key} -> ${resources[key]}`);
    }
}