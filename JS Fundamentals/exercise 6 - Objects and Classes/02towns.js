function towns(arr){
    let townObj = {};

    for(let i = 0; i < arr.length; i ++){
        let currentTown = arr[i];
        currentTown = currentTown.split(" |");
        let latitude = Number(currentTown[1]).toFixed(2);
        let longitude = Number(currentTown[2]).toFixed(2);

        townObj.town = currentTown[0];
        townObj.latitude = latitude;
        townObj.longitude = longitude;

        console.log(townObj)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)