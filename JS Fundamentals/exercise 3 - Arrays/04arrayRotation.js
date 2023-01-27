function arrayRotation(arr, rotations){
    let arr1 = arr;

    for(let i = 0; i < rotations; i ++){
        arr1[arr1.length] = arr1[i];
        arr1[i] = arr1[arr1.length];

    }

    console.log(arr1.join(" "));
}

arrayRotation([2, 4, 15, 31], 5)