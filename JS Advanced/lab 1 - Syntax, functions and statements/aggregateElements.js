function aggregate(input){
    function sum(arr){
        let result = 0;
        for(let i = 0; i < arr.length; i++){
            result+=arr[i];
        }
        return result;
    }

    function inverseSum(arr){
        let result = 0;
        for(let i = 0; i < arr.length; i++){
            result+= (1/arr[i]);
        }
        return result;
    }

    function concat(arr){
        let result = "";
        for(let i = 0; i < arr.length; i++){
            result+= arr[i];
        }
        return result;
    }

    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(concat(input));
}

aggregate([2,4,8,16])