function storeCatalogue(arr){
    let products = {};

    while(arr.length>0){
        let [name, price] = arr.shift().split(" : ");
        products[name] = Number(price);
    }

    let entries = Object.entries(products);
    entries.sort((a,b) => a[0].localeCompare(b[0]));

    let last = entries[0][0].substr(0,1);
    console.log(last);
    for(ent of entries){
        let current = ent[0].substr(0,1);
        
        if(current != last){
            console.log(current);
        }
        console.log(` ${ent[0]}: ${ent[1]}`);
        last = current;
    }
}

storeCatalogue(['Banana : 2','Rubics Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rali Car : 2000000', 'Pesho : 0.000001', 'Barrel : 10'])